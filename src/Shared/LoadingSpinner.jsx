import PropTypes from 'prop-types'
import { FaSpinner } from 'react-icons/fa6'


const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <FaSpinner className='animate-spin' size={80} color='skyblue' />
    </div>
  )
}

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
}

export default LoadingSpinner
