import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50 ">
      <div className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        {/* nav logo */}
        <div>
         <Link to="/"> <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="nav-logo"
            className="h-5 cursor-pointer"
          /></Link>
        </div>
        {/* nav item */}
        <ul className="flex space-x-10">
          <li className="py-3 text-sm font-semibold text-gray-400">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-red-500  text-black border-b-[3px] py-3 " : ""
            }
          >
            Home
          </NavLink>
          </li>
          <li className="py-3 text-sm font-semibold text-gray-400">
          <NavLink
            to="/offers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-red-500  text-black border-b-[3px] py-3 " : ""
            }
          >
            Offers
          </NavLink>
          </li>
          <li className="py-3 text-sm font-semibold text-gray-400">
          <NavLink
            to="/sign-in"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-red-500  text-black border-b-[3px] py-3" : ""
            }
          >
            Sign in
          </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
