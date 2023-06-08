import { Link } from "react-router-dom";

export default function Login() {
  return (
    <h1 className="flex justify-center items-center h-screen">
      <Link to="/app" className="bg-blue-400 text-white py-2">
        masuk
      </Link>
    </h1>
  );
}
