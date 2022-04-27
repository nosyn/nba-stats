import {
  AppShell,
  Navbar,
  Header,
  Group,
  useMantineTheme,
  MediaQuery,
  Burger,
  Footer,
  Box,
} from "@mantine/core";
import { MainLinks } from "./_mainLinks";
import { User } from "./_user";
import Logo from "./Logo";
import { ThemeToggle } from "../Button";
import { useState } from "react";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="sm"
          fixed
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Logo />

            <ThemeToggle />
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;
