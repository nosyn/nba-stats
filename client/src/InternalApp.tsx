import { Routes, Route } from "react-router-dom";

// Pages
import BasketBallPage from "./pages/BasketBallPage";
import DatabasesPage from "./pages/DatabasesPage";
import HomePage from "./pages/HomePage";
import SoccerPage from "./pages/SoccerPage";

// Themer
import Themer from "./theme";

interface InternalAppProps {}

const InternalApp = ({}: InternalAppProps) => {
  return (
    <Routes>
      <Route path="/" element={<Themer />}>
        <Route index element={<HomePage />} />
        <Route path="basketball" element={<BasketBallPage />} />
        <Route path="soccer" element={<SoccerPage />} />
        <Route path="databases" element={<DatabasesPage />} />
      </Route>
    </Routes>
  );
};

export default InternalApp;
