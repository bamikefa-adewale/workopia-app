import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobPost from "./pages/JobPost";
import DashBoard from "./pages/DashBoard";
import JobDetails from "./pages/JobDetails";
import AboutUser from "./pages/AboutUser";
import EditPost from "./pages/EditPost";
import Nav from "./componenets/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="about-user" element={<AboutUser />} />
        <Route path="/job-post" element={<JobPost />} />
        <Route path="/post-edit/:id" element={<EditPost />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>{" "}
    </Router>
  );
}

export default App;
