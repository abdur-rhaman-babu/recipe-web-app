import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <nav>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center">
    <div className="flex items-center gap-5">
    <div className="flex items-center gap-2 bg-slate-200 py-1 rounded-lg px-2">
        <i><IoIosSearch /></i>
        <input className="bg-slate-200 outline-none" type="text"  placeholder="Search"/>
        
    </div>
    <i className="text-3xl text-green-600"><FaUserCircle /></i>
    </div>
  </div>
</div> 
        </nav>
    );
};

export default Header;