import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Nav from "./componenets/Nav";
import DashBoard from "./pages/DashBoard";
import JobPost from "./pages/JobPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUser from "./pages/AboutUser";
import JobDetails from "./pages/JobDetails";
import EditPost from "./pages/EditPost";
import ProtectedRoute from "./Service/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="about-user" element={<AboutUser />} />
          <Route path="/job/:id" element={<JobDetails />} />

          {/* Protected Routes */}
          <Route
            path="/job-post"
            element={
              <ProtectedRoute>
                <JobPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post-edit/:id"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
