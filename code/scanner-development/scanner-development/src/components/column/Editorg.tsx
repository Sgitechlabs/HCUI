/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import { useNavigate } from "react-router-dom";
import { urlPath } from "../../utils/Url";
import useDeleteOrg from "../../hooks/useDeleteOrg";
import useOrganisation from "../../hooks/useOrganisation";
import Modal from "../Modal";
import { useState } from "react";

export const EditOrg = (info: any) => {
  const navigate = useNavigate();
  const [deletePost, deletePostInfo] = useDeleteOrg();
  const orgQuery: any = useOrganisation();
  const [open, setIsOpen] = useState(false);

  const navigateHandler = (value: any) => {
    navigate(`/create-organisation?orgId=${value.row.original.ACTION}`);
  };

  const closeHandler = () => {
    setIsOpen(!open);
  };

   
  const deletehandler = async (value: any) => {
    setIsOpen(false)
    await deletePost({
      organizationId: value.row.original.ACTION,
    });
    orgQuery.fetch();
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
        {deletePostInfo.isLoading ? (
          "Deleting..."
        ) : deletePostInfo.isError ? (
          "Error!"
        ) : deletePostInfo.isSuccess ? (
          "Deleted!"
        ) : (
          <img
            className="border h-9 bg-red-500 rounded-md w-8 p-2"
            src={`${urlPath.icon}trash-solid.svg`}
          />
        )}
      </button>
    </div>
  );
};
