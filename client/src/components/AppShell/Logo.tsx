import { Group, Text } from "@mantine/core";
import { BallBasketball } from "tabler-icons-react";

const Logo = () => {
  return (
    <Group spacing="sm">
      <BallBasketball size={32} strokeWidth={2} color={"#F88158"} />
      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Live Sports
      </Text>
    </Group>
  );
};

export default Logo;
