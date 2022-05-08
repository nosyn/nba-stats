import { ThemeIcon, UnstyledButton, Group, Text, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { BsTable } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  link: string;
}

function MainLink({ icon, color, label, link }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Anchor component={Link} to={link}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </Anchor>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <MdDashboard size={16} />,
    color: "orange",
    label: "Basket Ball",
    link: "/home",
  },
  {
    icon: <BsTable size={16} />,
    color: "grape",
    label: "Tables",
    link: "/tables",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
