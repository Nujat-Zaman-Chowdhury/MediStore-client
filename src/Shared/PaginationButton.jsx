

const PaginationButton = ({currentPage,handlePaginationButton,numberOfPages,pages}) => {
    return (
        <>
            <div className="my-12 flex justify-center items-center">
            
            {/* prev button */}
            <button
            disabled={currentPage === 1}
            onClick={()=>handlePaginationButton(currentPage-1)}
            className="px-4 border border-blue-500 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">Prev</button>

            {
                pages.map(pageNum=>(
                    <button
                    onClick={()=>handlePaginationButton(pageNum)}
                    className={`hidden ${currentPage === pageNum? 'bg-blue-500 text-white': ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`} 
                    key={{pageNum}}>{pageNum}</button>
                ))
            }

            {/* next button */}
            <button
            disabled={currentPage === numberOfPages}
            onClick={()=>handlePaginationButton(currentPage+1)}
            className="px-4 py-2 border border-blue-500 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">next</button>
            </div>
        </>
    );
};

export default PaginationButton;