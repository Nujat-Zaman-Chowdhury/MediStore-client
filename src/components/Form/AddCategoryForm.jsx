const AddCategoryForm = ({ setIsOpen }) => {
  return (
    <div className="w-full  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <div className="mt-2 ">
        <form className="space-y-3 my-3">
          <label className="input input-bordered border-blue-500 flex items-center gap-2 text-blue-500 font-outfit font-medium">
            Category Name:
            <input  {...register("image", { required: true })} type="text" className="grow" placeholder="Category Image" />
          </label> 
          <label className="input input-bordered border-blue-500 flex items-center gap-2 text-blue-500  font-outfit font-mediumfocus:outline-blue-400">
            Category Image:
            <input type="url" className="grow" placeholder="Category image" />
          </label>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Add
          </button>
        </form>
        <button
          type="button"
          className="w-full flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddCategoryForm;
