import { Link } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const CategoryCard = () => {
  const axiosCommon = useAxiosCommon();

  //get all category
  const {data: categories = []}= useQuery({
    queryKey:['categories'],
    queryFn:async()=>{
      const {data} = await axiosCommon('/categories')
      return data;
    }
  })
  console.log(categories);
  return (
    
      <div className="my-20">
        <div  className="text-3xl font-bold font-outfit text-blue-500 mb-8 flex justify-center items-center">
        <h1>SHOP OUR CATEGORIES</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          categories.map(category=>(<div key={category._id}>
            <Link to={`/category-details/${category.category}`} className="p-3 lg:p-8 w-full lg:w-96 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
              <img
                src={category.image}
                className="shadow rounded-lg overflow-hidden border h-full lg:h-[300px] object-cover w-full"
              />
              <div className="mt-8 flex flex-col justify-center">
                <h4 className="font-bold text-xl font-poppins capitalize text-center">{category.category}</h4>
                <p className="mt-2 text-gray-600 font-poppins">
                  Number of medicines: {category.medicineCount}
                </p>
              </div>
            </Link>
          </div>))
        }
        </div>
      </div>

  );
};

export default CategoryCard;
