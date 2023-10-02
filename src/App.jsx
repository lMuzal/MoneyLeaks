import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MiddleSection from "./MiddleSection";
import LoginPage from "./Loginpage";
import AccountSettings from "./AccountSettings"


export default function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/MoneyLeaks" element={<MiddleSection />} />
          <Route index element={<MiddleSection />} />
          <Route path="/MoneyLeaks/login" element={<LoginPage />} />
          <Route path="/MoneyLeaks/account" element={<AccountSettings />} />
        </Routes>
      </Router>
    </>
  );
}
