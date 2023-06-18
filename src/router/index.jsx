import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<h1>Register</h1>} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
