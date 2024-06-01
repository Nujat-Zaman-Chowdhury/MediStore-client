import { FaCircleArrowRight } from "react-icons/fa6";
import blogimg  from "../../../assets/blogimage.jpg"
import { useEffect, useState } from "react";

const BlogSection = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
        })
    },[])
    return (
        <div className="my-20">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold font-outfit">Blog & Articles</h1>
                <button className="btn bg-blue-400 text-white rounded-full hover:text-blue-400 hover:border-blue-400 hover:bg-white">Load More</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {blogs.map((blog)=>(<div key={blog.id} className="flex gap-4">
                <div className="">
                    <img src={blog.image} alt="" className="w-80 h-80 object-cover rounded-md"/>
                </div>
                <div className="w-1/2 h-full space-y-3 flex  items-center">
                    <div className="">
                    <div className="bg-blue-400 text-white flex items-center justify-center w-28 p-2 rounded-full mb-4">
                        <p className="text-lg font-poppins">{blog.category}</p>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg font-outfit">{blog.title}</h3>
                        <p className="my-3 text-gray-400">{blog.description}</p>
                        <p className="flex items-center gap-2 text-bold text-blue-500 font-poppins">Read More <span><FaCircleArrowRight /></span></p>
                    </div>
                    </div>
                </div>
            </div>))}
            </div>
        </div>
    );
};

export default BlogSection;