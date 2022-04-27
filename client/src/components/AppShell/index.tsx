import { AppShell, Navbar, Header, Group } from "@mantine/core";
import { MainLinks } from "./_mainLinks";
import { User } from "./_user";
import Logo from "./Logo";
import { ThemeToggle } from "../Button";

type DemoType = {
  children: React.ReactNode;
};

const Demo = ({ children }: DemoType) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
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
            <Logo />
            <ThemeToggle />
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Demo;
