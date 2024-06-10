import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
i


const SellerHomePage = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data: salesData={} ,isLoading} = useQuery({
        queryKey:['salesData'],
        queryFn:async()=>{
            const {data} = await axiosSecure.get(`/seller-revenue/${user?.email}`)
            return data;
        }
      })


;


      if(isLoading) return <LoadingSpinner/>
    return (
        <div>
            <Helmet>
                <title>Home | Dashboard</title>
            </Helmet>
            <div>
            <div className="bg-blue-200">
    <div className="grid gap-4 lg:gap-8 md:grid-cols-3 p-8">
        <div className="relative p-6 rounded-2xl bg-white shadow">
            <div className="space-y-2">
                <div
                    className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                    <span>Revenue</span>
                </div>

                <div className="text-3xl">
                    ${parseFloat(salesData.paidTotal).toFixed(3)}
                </div>

                <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                    <span>32k increase</span>

                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="relative p-6 rounded-2xl bg-white shadow">
            <div className="space-y-2">
                <div
                    className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                    <span>Pending</span>
                </div>

                <div className="text-3xl">
                    {salesData?.pendingCount}
                </div>

                <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">

                    <span>3% decrease</span>

                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

        </div>

        <div className="relative p-6 rounded-2xl bg-white shadow">
            <div className="space-y-2">
                <div
                    className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">

                    <span>Paid</span>
                </div>

                <div className="text-3xl">
                    {salesData?.paidCount}
                </div>

                <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                    <span>7% increase</span>

                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
        </div>
    );
};

export default SellerHomePage;