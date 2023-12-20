/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import { createColumnHelper } from "@tanstack/react-table";
import type {   Users } from "../types/columntypes";
import { EditUsers } from "../../components/column/EditUsers";

export const ProviderData = [
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
  },
];

const usersHelper = createColumnHelper<Users>();

export const UsersColumn = [

  usersHelper.accessor("USERNAME", {
    header: "Username",
    cell: (info) => EditUserName(info),
  }),
  usersHelper.accessor("PROVIDER", {
    header: "Provider",
  }),
  usersHelper.accessor("FULLNAME", {
    header: "Name",
  }),
  usersHelper.accessor("MOBILE", {
    header: "Mobile",
  }),
  usersHelper.accessor("STATUS", {
    header: "Status",
  }),
  usersHelper.accessor("ROLE", {
    header: "Role",
  }),
  usersHelper.accessor("COUNTRY", {
    header: "Country",
  }),
  usersHelper.accessor("ORGANIZATION", {
    header: "Org.",
  }),
  usersHelper.accessor("PROVIDER", {
    header: "P. Type",
  }),
  usersHelper.accessor("DEPARTMENT", {
    header: "Dept.",
  }),
  usersHelper.accessor("ACTION", {
    header: "Action",
    cell: (info) => EditUsers(info),
  }),
];

export const EditUserName = (info:any)=>{
  return <p className="text-center w-24 mx-auto break-all flex justify-center ">{info.row.original.USERNAME}</p>
}