import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'

import { BsFillFileEarmarkMedicalFill } from 'react-icons/bs'

import { AiFillSetting, AiOutlineBars } from 'react-icons/ai'
import { TbHomeHand } from "react-icons/tb";
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { MdPayments } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { IoStatsChartSharp } from 'react-icons/io5'
import { GiMedicines } from "react-icons/gi";
import { RiAdvertisementFill, RiChatHistoryFill } from "react-icons/ri";
const Sidebar = () => {
  const { logOut } = useAuth()
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
        className={`z-10 md:fixed flex flex-col bg-slate-500 justify-between overflow-x-hidden bg-base w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
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
              <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <FaHome className='w-5 h-5' />

                <span className='mx-4 font-medium'>Admin Home</span>
              </NavLink>

               {/* admin related   */}
              {/* manage users */}
              <NavLink
                to='manage-users'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white    ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <FaUsers className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Users</span>
              </NavLink>
              {/* manage category */}
              <NavLink
                to='manage-category'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <BsFillFileEarmarkMedicalFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Category</span>
              </NavLink>
              {/*payment management */}
              <NavLink
                to='payment-management'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <MdPayments className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment management</span>
              </NavLink>
              {/* sales report */}
              <NavLink
                to='sales-report'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <IoStatsChartSharp className='w-5 h-5' />

                <span className='mx-4 font-medium'>Sales Report</span>
              </NavLink>
              {/* manage banner advertise */}
              <NavLink
                to='manage-banner'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <AiFillSetting className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage banner Advertise</span>
              </NavLink>

               {/* seller related  */}
               <NavLink
                to='manage-medicines'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white    ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <GiMedicines className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Medicines</span>
              </NavLink>
               <NavLink
                to='payment-history'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white    ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <RiChatHistoryFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment History</span>
              </NavLink>
               <NavLink
                to='ask-for-advertisement'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white    ${
                    isActive ? 'bg-white text-blue-400' : 'text-white'
                  }`
                }
              >
                <RiAdvertisementFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Ask For Advertisement</span>
              </NavLink>

            </nav>
          </div>
        </div>

        <div>
          <hr />

          





          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5 text-white transition-colors duration-300 transform  hover:bg-blue-400   hover:text-white ${
                isActive ? 'bg-white text-blue-400' : 'text-white'
              }`
            }
          >
            <TbHomeHand className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </NavLink>
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