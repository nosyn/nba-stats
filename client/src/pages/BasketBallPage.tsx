import { Box } from "@mantine/core";
import LiveScoreBoards from "../components/widgets/ScoreBoard/LiveScoreBoards";

interface BasketBallPageProps {}

const BasketBallPage = ({}: BasketBallPageProps) => {
  return (
    <Box>
      <LiveScoreBoards />
    </Box>
  );
};

export default BasketBallPage;
