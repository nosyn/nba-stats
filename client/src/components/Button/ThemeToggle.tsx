import { ActionIcon, useMantineColorScheme } from "@mantine/core";

import { MdDarkMode, MdWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "orange"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <MdDarkMode size={18} /> : <MdWbSunny size={18} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
