import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate()
    const {createUser,UpdateUserProfile} = useAuth()
  const handleSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;
    const role = form.role.value;
    const formData = new FormData()
    formData.append('image',image)

    console.log(name, email, image, password, role);
    try{
       const {data} =await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
       )
       console.log(data.data.display_url);

       //signup
       const result = await createUser(email,password)
       console.log(result);

       //update user name and photo
       await UpdateUserProfile(name,data.data.display_url)
       navigate('/')
       toast.success('Signup Successful')
    }
    catch(err){
        console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen font-outfit">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-blue-400">Sign Up</h1>
          <p className="text-sm">Sign up to access your account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-md font-poppins">
                User Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                required
                placeholder="Please Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-blue-500 bg-base text-blue-500"
                color="#4299e1"
                data-temp-mail-org="0"
              />
            </div>
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
              <label
                htmlFor="image"
                className="block mb-2 text-md font-poppins"
              >
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full px-3 py-2 border rounded-md border-gray-600 focus:outline-blue-500 bg-base text-blue-500"
                color="#4299e1"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-poppins"
                >
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
          <div className="space-y-1 text-sm">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-poppins"
            >
              Select role
            </label>
            <select
            defaultValue="default"
              name="role"
              className="w-full px-3 py-3 border rounded-md border-gray-600 focus:outline-blue-400 bg-base "
            >
              <option disabled value="default">
                Select Your Role
              </option>
              <option value="User">User</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-400 w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-blue-400 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
