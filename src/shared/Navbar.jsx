import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center h-20 gap-10 px-10 font-medium">
      <NavLink
        to="/"
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} hover:underline-offset-[5px] hover:underline decoration-2 transition-all duration-150`}>
        All Users
      </NavLink>
      <NavLink
        to="/add-user"
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} hover:underline-offset-[5px] hover:underline decoration-2 transition-all duration-300`}>
        Add User
      </NavLink>
    </nav>
  );
};

export default Navbar;
