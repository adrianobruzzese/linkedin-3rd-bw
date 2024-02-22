import "./style/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./components/CustomNavbar";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route to="*" element={<ErrorPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
export default App;
