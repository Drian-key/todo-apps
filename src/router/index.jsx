import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<Dashboard />} />
    </Routes>
  );
}
