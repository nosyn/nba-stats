import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Layout from "../components/Layout";
import { ReactNode } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

// Notification
import { NotificationsProvider } from "@mantine/notifications";

// Override theme
import customTheme from "./customTheme";

type Theme = { children: ReactNode };

const Theme = ({ children }: Theme) => {
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
        theme={{ ...customTheme, colorScheme }}
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

export default Theme;
