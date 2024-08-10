import { NavLink } from "react-router-dom";

const Header = () => {
    const navLinkStyle = ({ isActive, isPending }) => {
        return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "red" : isActive ?"red" : "white"
        };
        }
        const navLinks = <>
                <li><NavLink to='/' style={navLinkStyle}>Home</NavLink></li>
                <li><NavLink to='/users' style={navLinkStyle}>Users</NavLink></li>
                <li><NavLink to='/signUp' style={navLinkStyle}>SignUp</NavLink></li>
                <li><NavLink to='/signIn' style={navLinkStyle}>SignIn</NavLink></li>
    
        </>
    return (
        <div>  
             
             
             <div className="navbar bg-[url('/src/assets/images/more/15.jpg')]">
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
        {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className=" flex justify-center space-x-[6px]b py-4 px-4 md:px-0">
             <div className=" w-[75px] h-[90px] ">
                    <img src="/src/assets/images/more/logo1.png" className="" alt="" />
                </div>
                <h1 className="text-6xl text-white">Espresso Emporium</h1>
             </div>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
             </div>

            
        </div>
    );
};

export default Header;