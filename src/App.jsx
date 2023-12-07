import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainSection from "./MainSection";
import LoginPage from "./Loginpage";
import AccountSettings from "./AccountSettings";
import Statistics from "./Statistics";
import SignupPage from "./SignupPage";
import Budget from "./Budget";

export default function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/MoneyLeaks/signup" element={<SignupPage />} />
          <Route path="/MoneyLeaks/login" element={<LoginPage />} />
          <Route path="/MoneyLeaks" element={<MainSection />} />
          <Route path="/MoneyLeaks/statistics" element={<Statistics />} />
          <Route path="/MoneyLeaks/account" element={<AccountSettings />} />
          <Route path="/MoneyLeaks/budget" element={<Budget />} />
        </Routes>
      </Router>
    </>
  );
}
