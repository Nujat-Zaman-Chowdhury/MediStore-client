

const AddMedicineForm = () => {
    return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col  text-gray-800 rounded-xl bg-white'>
      <form>
        <div className='w-full font-outfit'>
          <div className='space-y-6 w-full'>
            <div className="flex justify-between gap-2">
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Item Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='name'
                id='item-name'
                type='text'
                placeholder='Item name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Item Generic Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='generic-name'
                id='generic-name'
                type='text'
                placeholder='Item name'
                required
              />
            </div>
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:blue-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-300 focus:outline-blue-500 '
                name='description'
              ></textarea>
            </div>
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='w-full file_upload px-4 py-3 relative border-4 border-double border-blue-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-blue-500 text-white border border-blue-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border border-blue-300 focus:outline-blue-500 rounded-md'
                name='category'
              >
                
                <option disabled value="default">Select Category</option>
                <option value="Tablet">Tablet</option>
                <option value="Capsule">Capsule</option>
                <option value="Syrup">Syrup</option>
                <option value="Injection">Injection</option>
                <option value="Cream">Cream</option>
                <option value="Powder">Powder</option>
                <option value="Ointment">Ointment</option>
                <option value="Gel">Gel</option>
                <option value="Vitamins">Vitamins</option>
                
              </select>
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Company
              </label>
              <select
                defaultValue="default"
                required
                className='w-full px-4 py-3 border border-blue-300 focus:outline-blue-500 rounded-md'
                name='category'
              >
                
                <option disabled value="default">Select Company</option>
                <option value="Pharma Inc">Pharma Inc</option>
                <option value="HealthCorp">HealthCorp</option>
                <option value="BioMed">BioMed</option>
                <option value="WellnessPharm">WellnessPharm</option>
                <option value="DiabeCare">DiabeCare</option>
                <option value="Medicare">Medicare</option>
                <option value="SkinCare Ltd">SkinCare Ltd.</option>
                <option value="NaturalCare">NaturalCare</option>
                <option value="NutriLife">NutriLife</option>
                
              </select>
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Mass Unit
              </label>
              <select
                required
                className='w-full px-4 py-3 border border-blue-300 focus:outline-blue-500 rounded-md'
                name='category'
              >
                
                <option disabled value="default">Select Mass Unit</option>
                <option value="200mg">200mg</option>
                <option value="500mg">500mg</option>
                <option value="100ml">100ml</option>
                <option value="10ml">10ml</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            
            <div className='flex  justify-between gap-2 my-3'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Price Per Unit
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='pricePerUnit'
                id='pricePerUnit'
                type='text'
                placeholder='Title'
                required
              />
            </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Discount 
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                  name='discountPercentage'
                  id='discountPercentage'
                  type='text'
                  placeholder='Discount'
                  required
                />
              </div>

              
            </div>

          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500'
        >
          Save & Continue
        </button>
      </form>
    </div>
    );
};

export default AddMedicineForm;