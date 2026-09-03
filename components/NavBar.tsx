import { Link, NavLink } from "react-router";

const NavBar = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-semibold text-2xl text-text-accent transition-colors duration-300 hover:text-blue-800"
      : "text-gray-700 text-2xl transition-colors duration-300 hover:text-gray-900";
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" alt="React Practice" className="w-45 h-auto p-3" />
      </Link>
      <nav className="flex gap-4 p-3 justify-end">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/Accordion" end className={getLinkClass}>
          Accardion
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
