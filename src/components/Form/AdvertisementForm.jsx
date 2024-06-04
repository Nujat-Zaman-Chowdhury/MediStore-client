import { useForm } from "react-hook-form";
import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AdvertisementForm = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data)

    try {
      const image_url = await imageUpload(data.image[0]);
      // console.log(data,image_url);
      const seller = {
        name: user?.displayName,
        email: user?.email,
        profilePicture: user?.photoURL,
      };

      const advertisementData = {
        ...data,
        image: image_url,
        status:"Not In Slide",
        seller,
      };
      
      const res = await axiosSecure.post('/advertisement',advertisementData)
      console.log(res.data.insertedId);
      if(res.data.insertedId){
        toast.success("Advertisement Request Send to Admin")
        
      }



    } catch (err) {
      console.log(err);
      // toast.error(err.message)
    }
  };
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full font-outfit">
          <div className="space-y-6 w-full">
            
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Medicine Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="name"
                  id="medicine name"
                  type="text"
                  placeholder="Medicine name"
                  required
                />
              </div>

          
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                {...register("description", { required: true })}
                id="description"
                className="block rounded-md focus:blue-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-300 focus:outline-blue-500 "
                name="description"
              ></textarea>
            </div>
            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="w-full file_upload px-4 py-3 relative border-4 border-double border-blue-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      {...register("image", { required: true })}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-blue-500 text-white border border-blue-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
        >
          Save & Continue
        </button>
      </form>  
        </>
    );
};

export default AdvertisementForm;