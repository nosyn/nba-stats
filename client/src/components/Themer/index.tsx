import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Layout from "../Layout";
import { ReactNode } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

// Override theme
import theme from "../../theme";
import { NotificationsProvider } from "@mantine/notifications";

type MainLayout = { children: ReactNode };

const MainLayout = ({ children }: MainLayout) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        <NotificationsProvider>
          <Layout>{children}</Layout>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MainLayout;
