import { Routes, Route } from "react-router-dom";

// Pages
import BasketBallPage from "./pages/BasketBallPage";
import DatabasesPage from "./pages/DatabasesPage";
import HomePage from "./pages/HomePage";

// Themer
import Themer from "./theme";

interface InternalAppProps {}

const InternalApp = ({}: InternalAppProps) => {
  return (
    <Routes>
      <Route path="/" element={<Themer />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<BasketBallPage />} />
        <Route path="tables" element={<DatabasesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default InternalApp;
