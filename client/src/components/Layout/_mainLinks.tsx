import { Database, BallBasketball, SoccerField } from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";

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
    icon: <BallBasketball size={16} />,
    color: "orange",
    label: "Basket Ball",
    link: "/basketball",
  },
  {
    icon: <SoccerField size={16} />,
    color: "blue",
    label: "Soccer",
    link: "/soccer",
  },
  {
    icon: <Database size={16} />,
    color: "grape",
    label: "Databases",
    link: "/databases",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
