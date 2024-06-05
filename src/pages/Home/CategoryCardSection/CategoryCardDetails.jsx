import { Helmet } from "react-helmet-async";
import CardDetailsRow from "../../../components/TableRow/CardDetailsRow";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const CategoryCardDetails = () => {
  const axiosCommon = useAxiosCommon()
  const {category} = useParams();

  // console.log(category);

  const {data: categories=[],isLoading } = useQuery({
    queryKey:['categories'],
    queryFn:async()=>{
      const {data} = await axiosCommon(`/category-details/${category}`)
      return data;
    }
  })
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div className="container mx-auto px-4 sm:px-8 my-10">
        <Helmet>
          <title>Medicine Details | MediStore</title>
        </Helmet>
        <div className="py-8">
          <h2 className="text-3xl">Total {categories.length} Available</h2>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Category Name</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      categories.map(category=><CardDetailsRow key={category._id} category={category}></CardDetailsRow>)
                    }
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryCardDetails;