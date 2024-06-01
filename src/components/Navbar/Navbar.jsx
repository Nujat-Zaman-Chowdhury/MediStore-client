import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const {user,logOut} = useAuth();
    const navLinks = <>
    <li><Link to="/" className="text-xl block after:block bg-none after:h-[3px] after:bg-blue-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</Link></li>
    
    </>
    return (
        <div className="navbar bg-base-100 font-outfit shadow-md shadow-blue-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {navLinks}
      </ul>
    </div>
    <div className="flex items-center">
        <img src="/logo.png" alt="" className="w-12 h-12 mr-2 object-cover" />
        <Link to="/" className="text-xl font-bold text-blue-400">MediStore</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
      </div>
  {
    user && <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-blue-400">
      <div className="w-10 rounded-full" title={user?.displayName}>
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link>Update Profile</Link></li>
      <li><Link>Dashboard</Link></li>
      <li><Link>
      <button onClick={logOut}>Logout</button>
      </Link></li>
    </ul>
    
  </div>
  }
    <div>
        {
            !user && <Link to="/login" className="btn">Join Us</Link>
        }
    </div>
  </div>
</div>
    );
};

export default Navbar;