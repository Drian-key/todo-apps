import { Link } from "react-router-dom";
import logout from "../assets/icon/solar_logout-3-line-duotone.svg";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logout} alt="logout" />
      </Link>
    </nav>
  );
}
