import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { TbHomeHand } from "react-icons/tb";
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'

import { FaHome } from 'react-icons/fa'

import useRole from '../../../hooks/useRole';
import MenuItem from './Menu/MenuItem';
import SellerMenu from './Menu/SellerMenu';
import AdminMenu from './Menu/AdminMenu';
import UserMenu from './Menu/UserMenu';
import { AiOutlineBars } from 'react-icons/ai';
const Sidebar = () => {
  const { logOut } = useAuth()
  const [role] = useRole()
  console.log(role);
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col bg-sky-400 justify-between overflow-x-hidden bg-base w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 bg-white   rounded-lg justify-center items-center mx-auto'>
              <Link to='/' className='flex gap-2 items-center p-4 '>
                <img src="/logo.png" alt="" className='w-10 h-10' />
                <h2  className="text-xl  text-blue-400 font-outfit">MediStore</h2>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* dashboard home */}
              
              <MenuItem label="Home" address="/dashboard" icon={FaHome}></MenuItem>

              {/* admin related   */}
              {role === 'Admin' && <AdminMenu></AdminMenu>}

               {/* seller related  */}
               {role === 'Seller' && <SellerMenu></SellerMenu>}

              {/* user related routes */}
              {role === 'User' && <UserMenu></UserMenu>}

            </nav>
          </div>
        </div>

        <div>
          <hr />


          <MenuItem label="Home" address="/" icon={TbHomeHand}></MenuItem>

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-blue-400   hover:text-white transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar