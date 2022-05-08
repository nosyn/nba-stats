import { Anchor, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { FaBasketballBall } from "react-icons/fa";

const Logo = () => {
  return (
    <Anchor
      component={Link}
      to="/"
      align="center"
      variant="gradient"
      gradient={{ from: "IndianRed", to: "LightSalmon", deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      <Group spacing="sm">
        <FaBasketballBall size={26} color="orange" />
        NBA Live
      </Group>
    </Anchor>
  );
};

export default Logo;
