import type { Orgazization,  } from "../types/columntypes";
import { EditOrg } from "../../components/column/Editorg";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Orgazization>();



export const OrganisationColumn = [
  columnHelper.accessor("ORGANIZATION", {
    header: "Organization",
  }),
  columnHelper.accessor("PHONE", {
    header: "Phone",
  }),
  columnHelper.accessor("EMAIL", {
    header: "Email",
  }),
  columnHelper.accessor("CITY", {
    header: "City",
  }),
  columnHelper.accessor("ACTIVE", {
    header: "Active",
  }),
  columnHelper.accessor("NOOFPROVIDER", {
    header: "Nbr Of Provider",
  }),
  columnHelper.accessor("ACTION", {
    header: "Action",
    cell: (info) => EditOrg(info),
  }),
];