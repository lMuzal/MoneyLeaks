import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainSection from "./MainSection";
import LoginPage from "./Loginpage";
import DynamicButtonGroupSelector from "./DynamicButtonGroupSelector";

export default function App() {

  return (
    <>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/MoneyLeaks" element={<MainSection />} />
            <Route path="/MoneyLeaks/login" element={<LoginPage />} />
            <Route
              path="/MoneyLeaks/account"
              element={<DynamicButtonGroupSelector />}
            />
          </Routes>
        </Router>
    </>
  );
}
