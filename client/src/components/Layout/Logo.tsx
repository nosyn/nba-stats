import { Anchor, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Dashboard } from "tabler-icons-react";

const Logo = () => {
  return (
    <Anchor
      component={Link}
      to="/"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      <Group spacing="sm">
        <Dashboard size={32} strokeWidth={2} color="orange" />
        Live Sports
      </Group>
    </Anchor>
  );
};

export default Logo;
