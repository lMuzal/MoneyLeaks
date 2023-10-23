import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainSection from "./MainSection";
import LoginPage from "./Loginpage";
import DynamicButtonGroupSelector from "./DynamicButtonGroupSelector";
import Statistics from "./Statistics";

export default function App() {

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/MoneyLeaks/login" element={<LoginPage />} />
          <Route path="/MoneyLeaks" element={<MainSection />} />
          <Route path="/MoneyLeaks/statistics" element={<Statistics />} />

          <Route
            path="/MoneyLeaks/account"
            element={<DynamicButtonGroupSelector />}
          />
        </Routes>
      </Router>
    </>
  );
}
