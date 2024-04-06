import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AuthPage from "./pages/authPage/AuthPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}
