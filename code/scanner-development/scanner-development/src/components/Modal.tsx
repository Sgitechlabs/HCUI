/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { urlPath } from "../utils/Url";

export default function Modal({isOpen  ,closeModal , deletehandler}:any) {
   
 
  const delethandler = ()=>{
    deletehandler()

  }

   
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center items-center mb-4">
                    <img
                      className="h-20 w-20"
                      src={`${urlPath.icon}deleteIcon.svg`}
                      alt="icon"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium flex gap-y-4 flex-col leading-6 text-gray-900 text-center"
                  >
                    <p> Are you Sure ?</p>

                    <p className="text-sm text-gray-500 text-center">
                      Are you Sure You want to Remove this Record
                    </p>
                  </Dialog.Title>
                  <div className="mt-2"></div>

                  <div className="mt-4 flex gap-x-4 justify-center items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium  hover:bg-blue-200 focus:outline-none  text-white"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm text-white font-medium"
                      onClick={()=> delethandler()}
                    >
                      Yes Delete it !
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
