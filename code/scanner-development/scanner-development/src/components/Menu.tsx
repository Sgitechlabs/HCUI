/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { urlPath } from "../utils/Url";


export default function MenuList({ title }: any) {
  const navigate = useNavigate()
  const logoutHandler =  () => {
    localStorage.clear()
    navigate("/")
    
     
  };
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex font-bold w-full justify-center rounded-md px-2 py-2 text-sm  text-white capitalize  focus:outline-none">
            {title}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100 font-bold"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  onClick={() => logoutHandler()}
                  className={`${"text-gray-900"} group flex gap-x-4 w-full items-center rounded-md px-4 py-2 text-base`}
                >
                  Logout
                  <img className="h-4 w-4" src={`${urlPath.icon}logout.svg`} alt="logout" />
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
