import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../utils";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddMedicineForm = ({closeModal,refetch}) => {
  const { user } = useAuth();

  // const navigate = useNavigate()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();


  
  const {mutateAsync} = useMutation({
    mutationFn:async(medicineData)=>{
      const {data} = await axiosSecure.post('/medicine',medicineData)
      return data;
    },
    onSuccess:()=>{
      // console.log("medicine data posted");
      closeModal()
      toast.success("Medicine added successfully")
      refetch();
    }
  })

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

      const medicineData = {
        ...data,
        pricePerUnit: parseFloat(data.pricePerUnit), 
        discountPercentage: parseFloat(data.discountPercentage),
        image: image_url,
        seller,

      };
      // console.log(medicineData);

      //post req to server
      await mutateAsync(medicineData)


    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col  text-gray-800 rounded-xl bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full font-outfit">
          <div className="space-y-6 w-full">
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Item Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="name"
                  id="item-name"
                  type="text"
                  placeholder="Item name"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Item Generic Name
                </label>
                <input
                  {...register("generic-name", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="generic-name"
                  id="generic-name"
                  type="text"
                  placeholder="Generic name"
                  required
                />
              </div>
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

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                {...register("category", { required: true })}
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
                <option value="Ointment">Ointment</option>
                <option value="Gel">Gel</option>
                <option value="Vitamins">Vitamins</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="company" className="block text-gray-600">
                Company
              </label>
              <select
                {...register("company", { required: true })}
                defaultValue="default"
                required
                className="w-full px-4 py-3 border border-blue-300 focus:outline-blue-500 rounded-md"
                name="company"
              >
                <option disabled value="default">
                  Select Company
                </option>
                <option value="Pharma Inc">Pharma Inc</option>
                <option value="HealthCorp">HealthCorp</option>
                <option value="BioMed">BioMed</option>
                <option value="WellnessPharm">WellnessPharm</option>
                <option value="DiabeCare">DiabeCare</option>
                <option value="Medicare">Medicare</option>
                <option value="NaturalCare">NaturalCare</option>
                <option value="NutriLife">NutriLife</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Mass Unit
              </label>
              <select
                {...register("mass-unit", { required: true })}
                required
                className="w-full px-4 py-3 border border-blue-300 focus:outline-blue-500 rounded-md"
                name="mass-unit"
              >
                <option disabled value="default">
                  Select Mass Unit
                </option>
                <option value="200mg">200mg</option>
                <option value="500mg">500mg</option>
                <option value="100ml">100ml</option>
                <option value="10ml">10ml</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex  justify-between gap-2 my-3">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Price Per Unit
                </label>
                <input
                  {...register("pricePerUnit", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="pricePerUnit"
                  id="pricePerUnit"
                  type="text"
                  placeholder="Per Unit Price"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Discount
                </label>
                <input
                  {...register("discountPercentage", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md "
                  name="discountPercentage"
                  id="discountPercentage"
                  type="text"
                  placeholder="Discount"
                  required
                />
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
      <div className="mt-3">
        <button onClick={closeModal} className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-500">Close</button>
      </div>
    </div>
  );
};

export default AddMedicineForm;
