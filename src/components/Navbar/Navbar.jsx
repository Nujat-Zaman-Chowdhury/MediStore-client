import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart()
  // console.log(cart);
  // const [sticky, setSticky] = useState(false);
  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className="text-xl block after:block bg-none after:h-[3px] after:bg-blue-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/shop-page"
          className="text-xl block after:block bg-none after:h-[3px] after:bg-blue-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Shop
        </Link>
      </li>
    </>
  );

  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     window.scrollY>50? setSticky(true) :  setSticky(false);
  //   })
  // },[])
  //fixed top-0 left-0 z-50 ${sticky? 'bg-base-100 text-blue-500': 'bg-base-100'}
  return (
    <div className={`navbar   font-outfit shadow-md shadow-blue-200`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img src="/logo.png" alt="" className="w-10 h-10 mr-2 object-cover" />
          <Link to="/" className="text-xl font-bold text-blue-400 font-outfit">
            MediStore
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/cart-page" tabIndex={0} role="button" className="btn btn-ghost btn-circle flex items-center justify-center text-lg mr-4">
         
          <FaShoppingCart /><span>{cart.length}</span>
          
        </Link>
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-blue-400"
            >
              <div className="w-10 rounded-full" title={user?.displayName}>
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Update Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link>
                  <button onClick={logOut}>Logout</button>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div>
          {!user && (
            <Link to="/login" className="btn">
              Join Us
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
