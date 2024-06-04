import { Helmet } from "react-helmet-async";
import CardDetailsRow from "../../../components/TableRow/CardDetailsRow";

const CategoryCardDetails = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 my-10">
        <Helmet>
          <title>Medicine Details | MediStore</title>
        </Helmet>
        <div className="py-8">
          <h2 className="text-3xl">Total Users: </h2>
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
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CardDetailsRow></CardDetailsRow>
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