/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { urlPath } from "../../utils/Url";
import { ENV } from "../../environment/indext";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../Modal";
import { useState } from "react";

export const EditProvider = (info: any) => {
  const navigate = useNavigate();
  const [open, setIsOpen] = useState(false);

  const navigateHandler = (value: any) => {
    navigate(`/create-provider?providerId=${value.row.original.ACTION}`);
  };

   

  const closeHandler = async () => {
    setIsOpen(!open);
  };

  const deletehandler = async (value: any) => {
    setIsOpen(false)
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${ENV.BASE_URL}/provider/Delete`,
        { providerid: value.row.original.ACTION },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("organisation deleted successfully");
        window.location.reload();
      }
    } catch (err: any) {
      toast.error(err?.message || "Something wrong");
    }
  };

  return (
    <div className="gap-x-2 flex justify-center items-center">
       <Modal
        isOpen={open}
        closeModal={closeHandler}
        deletehandler={()=> deletehandler(info)}
      />
      <button onClick={() => navigateHandler(info)}>
        <img
          className="border h-9 bg-icons rounded-md w-8 p-2"
          src={`${urlPath.icon}pencil-solid.svg`}
        />
      </button>
      <button onClick={() => closeHandler()}>
        <img
          className="border h-9 bg-red-500 rounded-md w-8 p-2"
          src={`${urlPath.icon}trash-solid.svg`}
        />
      </button>
    </div>
  );
};

export const EditMail = (info: any) => {
  return (
    <p className="text-center w-24 mx-auto break-all flex justify-center ">
      {info.row.original.EMAIL}
    </p>
  );
};
