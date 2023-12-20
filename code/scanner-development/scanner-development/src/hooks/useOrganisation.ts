/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { useQuery } from "react-query";
import { ENV } from "../environment/indext";

export default  function useOrganisation() {
  const fetch = async () => {
    const payload = {
      Active: true,
    };

    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${ENV.BASE_URL}/Organization/GetAll`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token && `Bearer ${JSON.parse(token)}`,
        },
      }
    );
    if (response.status === 200) {
      const list = response.data.map((item: any, index: number) => {
        return {
          Id: index,
          ORGANIZATION: item?.name,
          PHONE: item?.phone1,
          EMAIL: item?.email,
          CITY: item?.city,
          ACTIVE: item?.active ? "Active" : "Non-Active",
          NOOFPROVIDER: item?.nbrOfProvider,
          ACTION: item?.organizationId,
        };
      });
      const orgTypeList = response.data.map((item: any) => {
        return {
          id: item?.organizationId,
          title: item?.name,
        };
      });

      return { isSuccess: true, orgList: list, orgTypeList };
    }
  };

  const response = useQuery({ queryKey: ["organisation"], queryFn: fetch });

   return response
}
