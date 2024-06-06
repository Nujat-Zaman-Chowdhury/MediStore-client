import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EyeButtonModal = ({ isOpen, closeModal,selectedMedicine,medicine }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-outfit">
                      Information of <span className="text-blue-400">{medicine?.name}</span>
                    </h1>
                    <button
                    onClick={closeModal}
                    className="btn btn-circle bg-white text-[#121212]">
                      <AiOutlineClose />
                    </button>
                  </div>
                </DialogTitle>

                <div className="mt-2 w-full">
                
                    <div className=" bg-gray-50 rounded-lg">
                      <img
                        src={medicine?.image}
                        alt={medicine?.name}
                        className="w-full h-60 object-cover rounded-lg mb-4"
                      />
                      <div className="mb-2">
                        <h2 className="font-bold">Name:</h2>
                        <p>{medicine?.name}</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Generic Name:</h2>
                        <p>{medicine?.["generic-name"]}</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Category:</h2>
                        <p>{medicine?.category}</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Description:</h2>
                        <p>{medicine?.description}</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Price:</h2>
                        <p>${medicine?.pricePerUnit}</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Mass Unit:</h2>
                        <p>${medicine?.["mass-unit"]}</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Discount:</h2>
                        <p>{medicine?.discountPercentage}%</p>
                      </div>
                      <div className="mb-2">
                        <h2 className="font-bold">Company:</h2>
                        <p>{medicine?.company}</p>
                      </div>
                    </div>
                  
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EyeButtonModal;
