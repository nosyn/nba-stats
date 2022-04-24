import { Table } from "@mantine/core";
import { useMemo } from "react";
import { Column, useExpanded, useSortBy, useTable } from "react-table";

export type ReactTableProps = {
  data: Array<any>;
  columns: Array<any>;
  enableSorting?: boolean;
  hideHeaders?: boolean;
};

const ReactTable = ({
  columns,
  data,
  enableSorting,
  hideHeaders,
}: ReactTableProps) => {
  const columnLength = columns.length;

  /* It's important that we're using React.useMemo here to ensure
   * that our data isn't recreated on every render. If we didn't use
   * React.useMemo, the table would think it was receiving new data on
   * every render and attempt to recalulate a lot of logic every single
   * time. Not cool!
   */

  const convertedColumns = useMemo(() => {
    return columns.map((column, index) => ({
      Header: column,
      accessor: `col${index + 1}`,
    }));
  }, [columns]);

  const convertedData = useMemo(() => {
    const dataLength = data.length;
    return data.map((e) => {
      const dataKeys = Object.keys(e);
      return {
        col1: e.position,
        col2: e.name,
        col3: e.symbol,
        col4: e.mass,
      };
    });
  }, [data]);

  //   const data = useMemo(() => data, [data]);
  //   const columns = useMemo(
  //     () => processColumns(columns, data),
  //     [columns, data]
  //   );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns: convertedColumns,
        data: convertedData,
        disableSortBy: !enableSorting,
      },
      useSortBy,
      useExpanded
    );

  return (
    <Table captionSide="bottom" striped highlightOnHover {...getTableProps()}>
      <caption>Some elements from periodic table</caption>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
};

export default ReactTable;
