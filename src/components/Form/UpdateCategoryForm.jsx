import { useForm } from "react-hook-form";
import { imageUpload } from "../../utils";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";


const UpdateCategoryForm = ({category,refetch,setIsEditModalOpen}) => {
    const axiosSecure = useAxiosSecure();
    const [loading,setLoading]= useState(false)
    const [categoryData,setCategoryData] = useState(category)
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = async (data) => {
    
        // const image_url = await imageUpload(data.image[0]);
        const updatedCategoryData = Object.assign(categoryData)
        console.log(updatedCategoryData);
        delete updatedCategoryData._id
        try {
          
          
    
          //save category to db
          const {data} = await axiosSecure.put(`/category/update/${category?._id}`,updatedCategoryData)
          refetch();
          setLoading(false)
          setIsEditModalOpen(false)
          toast.success("Updated Successfully")

    
        } catch (err) {
          console.log(err);
          toast.error(err.message)
        }
      };
      const handleImage =async image =>{
        setLoading(true)
        try{
            const image_url = await imageUpload(image)
            setCategoryData({...categoryData, image:image_url})
            setLoading(false)
            setIsEditModalOpen(false)
        }
        catch(err){
            console.log(err);
            setLoading(false)
            toast.error(err.message)
        }
    }
    return (
        <div className="w-full flex flex-col justify-center  text-gray-800 rounded-xl bg-white">
      <div className="mt-2 ">
        <form className="space-y-3 my-3 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1 text-sm w-1/2 mx-auto">
              <label htmlFor="category" className="block text-gray-600">
                Category Name
              </label>
              <select
                {...register("category")}
                value={categoryData?.category}
                onChange={(e)=>{setCategoryData({...categoryData,category:e.target.value})}}
                required
                className="w-full px-4 py-3 border border-blue-300 focus:outline-blue-500 rounded-md"
                name="category"
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="Tablet">Tablet</option>
                <option value="Capsule">Capsule</option>
                <option value="Syrup">Syrup</option>
                <option value="Injection">Injection</option>
                <option value="Cream">Cream</option>
                <option value="Powder">Powder</option>
                <option value="Ointment">Ointment</option>
                <option value="Gel">Gel</option>
                <option value="Vitamins">Vitamins</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 mx-auto text-center py-4">
                  <label>
                    <input
                      {...register("image")}
                      onChange={(e)=>{handleImage(e.target.files[0])}}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-blue-500 text-white border border-blue-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                      Category Image
                    </div>
                  </label>
                </div>
          <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-1/2  inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Update
          </button>
          </div>
        </form>
        <div className="w-full flex justify-center items-center">
        <button
          type="button"
          onClick={()=>setIsEditModalOpen(false)}
          className="w-1/2 shadow-md flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          
        >
          Close
        </button>
        </div>
      </div>
    </div>
    );
};

export default UpdateCategoryForm;