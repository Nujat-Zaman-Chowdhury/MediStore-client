import { Helmet } from "react-helmet-async";
import ShopPageRow from "../../components/TableRow/ShopPageRow";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";


const ShopPage = () => {
    const axiosCommon = useAxiosCommon()

    const {data : medicines=[],isLoading,refetch} = useQuery({
        queryKey:['medicines'],
        queryFn:async()=>{
            const {data} = await axiosCommon('/medicines')
            return data
        }
    })

    return (
        <div>
        <Helmet>
                <title>Shop Page | MediStore</title>
        </Helmet>
      <div className="flex justify-center items-center my-5">
        <h2 className="text-2xl font-outfit font-bold">All Medicines</h2>
       
      </div>
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-outfit capitalize">
              <th>Medicine Name</th>
              {/* <th>Generic Name</th> */}
              <th>Description</th>
              <th>Category</th>
              {/* <th>Company</th>
              <th>Unit Mass</th> */}
              <th>Price</th>
              {/* <th>Discount</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {medicines.map(medicine=><ShopPageRow key={medicine._id} medicine={medicine} isLoading={isLoading}/>)}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ShopPage;