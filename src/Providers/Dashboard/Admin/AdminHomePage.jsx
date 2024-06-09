import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHomePage = () => {
    const axiosSecure = useAxiosSecure()
    const {data: salesData={} ,isLoading} = useQuery({
        queryKey:['salesData'],
        queryFn:async()=>{
            const {data} = await axiosSecure.get('/admin-revenue')
            return data;
        }
      })

        //custom bar charts
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  //custom piechart
  const { data: chartData = [] } = useQuery({
    queryKey: ["admin-revenue"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-revenue");
      return [res.data];
    },
  });
  const pieChartData = chartData.map(data=>{
    return {name:data.category,value: data.revenue}
  })
  
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
                    ${parseFloat(salesData.totalPaid).toFixed(3)}
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
                    {salesData?.countPending}
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
                    {salesData?.countPaid}
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
<div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="totalPaid" />
            <YAxis dataKey="totalPending"/>
            <Bar
              dataKey="totalPending"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AdminHomePage;