import { Box } from "@mantine/core";
import LiveScoreBoards from "../components/widgets/ScoreBoard/LiveScoreBoards";

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <Box>
      Home Page
      <LiveScoreBoards />
    </Box>
  );
};

export default HomePage;
