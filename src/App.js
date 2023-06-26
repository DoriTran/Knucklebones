import { Home, HowToPlay } from "features";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition preset="scaleUpScaleUp" transitionKey={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </PageTransition>
  );
}

export default App;
