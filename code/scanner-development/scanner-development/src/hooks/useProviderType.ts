/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { ENV } from "../environment/indext";
import { useQuery } from "react-query";

export default function useProviderType() {
  const provider = async () => {
    const payload = {
      Active: true,
    };

    const token = localStorage.getItem("token");
    const url = `${ENV.BASE_URL}/ProviderType/GetAll`;
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${JSON.parse(token)}`,
      },
    });
    if (response.status === 200) {
      
      const providerListType = response.data.map((item: any) => {
        return {
          id: item.providerTypeId,
          title: item.providerType1,
        };
      });

      return { providerListType };
    }
  };

  const result = useQuery({ queryKey: ["providerType"], queryFn: provider });

  return result;
}
