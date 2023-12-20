import { createColumnHelper } from "@tanstack/react-table";
import { Provider } from "../types/columntypes";
import { EditMail, EditProvider } from "../../components/column/EditProvider";

const providerHelper = createColumnHelper<Provider>();

export const ProviderColumn = [
  providerHelper.accessor("PROVIDER", {
    header: "Provider",
  }),
  providerHelper.accessor("ORGANIZATION", {
    header: "Organization",
  }),

  providerHelper.accessor("SPECIALIAZATION", {
    header: "Specialization",
  }),
  providerHelper.accessor("PROVIDER", {
    header: "Provider",
  }),
  providerHelper.accessor("FULLNAME", {
    header: "Full Name",
  }),
  providerHelper.accessor("MOBILE", {
    header: "Mobile",
  }),
  providerHelper.accessor("EMAIL", {
    header: "Email",
    cell: (info) => EditMail(info),
    
  }),
  providerHelper.accessor("STATUS", {
    header: "Status",
  }),
  providerHelper.accessor("PROVISIONTYPE", {
    header: "P. Type",
  }),
  providerHelper.accessor("PROVIDERNUMBER", {
    header: "Provider#",
  }),
  
  providerHelper.accessor("ACTION", {
    header: "Action",
    cell: (info) => EditProvider(info),
  }),
];

 