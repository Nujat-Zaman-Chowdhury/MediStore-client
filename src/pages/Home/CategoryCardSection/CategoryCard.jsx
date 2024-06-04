import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <div>
      <div>
        <div  className="text-3xl font-bold font-outfit text-blue-400 mb-8 flex justify-center items-center">
        <h1>SHOP OUR CATEGORIES</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <Link to={`/category-details`} className="p-8 md:w-96 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
            <img
              src="https://loremflickr.com/800/600/girl"
              className="shadow rounded-lg overflow-hidden border md:h-[360px] object-cover w-full"
            />
            <div className="mt-8">
              <h4 className="font-bold text-xl font-poppins capitalize">Category Name</h4>
              <p className="mt-2 text-gray-600 font-poppins">
                Number of medicines
              </p>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
