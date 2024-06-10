import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    
    
})
const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    //request interceptor
    axiosSecure.interceptors.request.use(function(config){
      const token = localStorage.getItem('access-token')
      console.log(token);

      config.headers.authorization =`Bearer ${token}`
      console.log(config.headers.authorization);
      return config;
    }, function(error) {
      return Promise.reject(error);
    })


  axiosSecure.interceptors.response.use(function(response){
    return response
},async(error)=>{
    const status = error.response.status
    // console.log('status error',status);
    //for 401 or 403 logout user and move user to login page
    if(status === 401 || status === 403){
        await logOut();
        navigate('/login')
    }
    return Promise.reject(error)
})


    return axiosSecure;
};

export default useAxiosSecure;