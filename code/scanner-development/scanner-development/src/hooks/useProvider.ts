/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { ENV } from "../environment/indext";
import { useQuery } from "react-query";

export default function useProvider() {
  const provider = async () => {
    const payload = {
      Active: true,
    };

    const token = localStorage.getItem("token");
    const url = `${ENV.BASE_URL}/Provider/GetAll`;
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${JSON.parse(token)}`,
      },
    });
    if (response.status === 200) {
      const list = response.data.map((item: any, index: number) => {
        return {
          Id: index,
          ORGANIZATION: item?.organization || "N/A",
          PROVISIONTYPE: item?.providerType || "N/A",
          SPECIALIAZATION: item?.specialization || "N/A",
          PROVIDER: item?.providerName || "N/A",
          FULLNAME: item?.fullName || "N/A",
          MOBILE: item?.mobile1 || "N/A",
          EMAIL: item?.email,
          STATUS: item.active ? "Active" : "Non-Active",
          PROVIDERNUMBER: item?.providerNumber || "N/A",
          ACTION: item?.providerId,
        };
      });
      const providerListType = response.data.map((item: any) => {
        return {
          id: item.providerTypeId,
          title: item.providerName,
        };
      });

      return {  List: list, providerListType };
    }
  };

  const result = useQuery({ queryKey: ["provider"], queryFn: provider });

  return result;
}
