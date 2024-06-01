import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { ImSpinner10 } from "react-icons/im";
import toast from "react-hot-toast";


const Login = () => {
    const {signIn,signInWithGoogle,loading,setLoading} = useAuth()
    const navigate = useNavigate()
    const handleSubmit =async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;
        
    
        console.log(email, password);
        try{
            setLoading(true)

           //signin
           await signIn(email,password)
           navigate('/')
           toast.success('Signup Successful')
        }
        catch(err){
            console.log(err);
            toast.error(err.message)
            
        }
      };

      //handle google sign in
      const handleGoogleSignIn = async()=>{
        try{
            await signInWithGoogle()
            navigate('/')
            toast.success('Login Successful')
        }
        catch(err){
           
            console.log(err);
            toast.error(err.message)
        }
      }
  return (
    <div className="flex justify-center items-center min-h-screen font-outfit">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-blue-400">Log In</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-poppins"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Please Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-blue-500 bg-base text-blue-500"
                color="#4299e1"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block mb-2 text-md font-poppins">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-blue-400 bg-base text-blue-500"
              />
            </div>
          </div>

          <div>
            <button
            disabled={loading}
              type="submit"
              className="bg-blue-400 w-full rounded-md py-3 text-white disabled:cursor-not-allowed"
            >
              {loading? <ImSpinner10 className="animate-spin m-auto"/> : 'Login'}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-blue-500 text-gray-600">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-blue-500 font-medium">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
        disabled={loading}
          onClick={handleGoogleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center my-3 w-full p-4 space-x-4 border rounded-md focus:ring-2 bg-blue-400 focus:ring-offset-1  hover:bg-blue-500 text-white disabled:cursor-not-allowed"
        >
          <div className="bg-white p-1 rounded-full">
          <FcGoogle className="text-md"/>
          </div>
          <p className="font-poppins">Login with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-600">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/sign-up"
            className="hover:underline hover:text-blue-400 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
