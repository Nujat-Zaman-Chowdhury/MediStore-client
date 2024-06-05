import img1 from "../../../assets/img1.avif";
const ProfessionalSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 my-10 container mx-auto items-center">
      <div className="lg:w-1/2 h-full">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500 font-poppins">Excellent Medical Professionals With Significant Experience</h1>
          <p className="text-lg text-slate-600 font-outfit">
            At the core of our commitment to providing exceptional healthcare
            services lies our team of outstanding medical professionals with
            significant experience.
          </p>
          <button className="btn bg-blue-500 text-white btn-ghost hover:text-blue-400 hover:bg-white hover:border-blue-400 font-outfit">Book Now</button>
        </div>
      </div>
      <div className="relative h-full">
        <img src={img1} alt="" className="object-cover h-[400px]" />
        <div className="w-full absolute -bottom-6 hidden lg:flex  gap-2 justify-center items-center">
          <div>
            <div className="flex gap-2 items-center p-4 bg-white shadow-md rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={56}
                height={56}
                color={"#4a90e2"}
                fill={"none"}
              >
                <path
                  d="M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h3 className="md:text-3xl font-bold font-poppins">200k +</h3>
                <small className="text-gray-500 font-poppins">Happy Clients</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center p-4 bg-white shadow-md rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={48} height={48} color={"#4a90e2"} fill={"none"}>
    <path d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
              <div>
                <h3 className="md:text-3xl font-bold font-poppins">50k +</h3>
                <small className="text-gray-500 font-poppins">Orders Delivered</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center p-4 bg-white shadow-md rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={48} height={48} color={"#4a90e2"} fill={"none"}>
    <path d="M12 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 18C10.3264 18 8.86971 19.012 8.11766 20.505C7.75846 21.218 8.27389 22 8.95877 22H15.0412C15.7261 22 16.2415 21.218 15.8823 20.505C15.1303 19.012 13.6736 18 12 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 5H3.98471C2.99819 5 2.50493 5 2.20017 5.37053C1.89541 5.74106 1.98478 6.15597 2.16352 6.9858C2.50494 8.57086 3.24548 9.9634 4.2489 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 5H20.0153C21.0018 5 21.4951 5 21.7998 5.37053C22.1046 5.74106 22.0152 6.15597 21.8365 6.9858C21.4951 8.57086 20.7545 9.9634 19.7511 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12C15.866 12 19 8.8831 19 5.03821C19 4.93739 18.9978 4.83707 18.9936 4.73729C18.9509 3.73806 18.9295 3.23845 18.2523 2.61922C17.5751 2 16.8247 2 15.324 2H8.67596C7.17526 2 6.42492 2 5.74772 2.61922C5.07051 3.23844 5.04915 3.73806 5.00642 4.73729C5.00215 4.83707 5 4.93739 5 5.03821C5 8.8831 8.13401 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
              <div>
                <h3 className="md:text-3xl font-bold font-poppins">5L </h3>
                <small className="text-gray-500 font-poppins">Medicines</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center p-4 bg-white shadow-md rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={48} height={48} color={"#4a90e2"} fill={"none"}>
    <path d="M12 7.5C12 9.433 10.433 11 8.5 11C6.567 11 5 9.433 5 7.5C5 5.567 6.567 4 8.5 4C10.433 4 12 5.567 12 7.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13.5 11C15.433 11 17 9.433 17 7.5C17 5.567 15.433 4 13.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13.1429 20H3.85714C2.83147 20 2 19.2325 2 18.2857C2 15.9188 4.07868 14 6.64286 14H10.3571C11.4023 14 12.3669 14.3188 13.1429 14.8568" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 14V20M22 17L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
              <div>
                <h3 className="md:text-3xl font-bold font-poppins">80k +</h3>
                <small className="text-gray-500 font-poppins">Area Served</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSection;
