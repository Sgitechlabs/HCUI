/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
 
import { ENV } from "../environment/indext";
import { useQuery } from "react-query";

export default function useUsers() {
   
 
  const fetch = async () => {
    const payload = {
      Active: true,
    };
    
     
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${ENV.BASE_URL}/Users/GetAll`,
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
            USERNAME: item?.userName || "N/A",
            FULLNAME: item?.firstName || "N/A",
            MOBILE: item?.mobile1 || "N/A",
            EMAIL: item?.email || "N/A",
            COUNTRY: item?.country || "N/A",
            ROLE: item?.role || "N/A",
            PROVIDER: item.provider || "N/A",
            ORGANIZATION: item?.organization || "N/A",
            DEPARTMENT: item?.department || "N/A",
            STATUS: item.action ? "Active" : "NOn-Active",
            ACTION: item?.userId,
          };
        });

        return { isSuccess: true, List: list }
      }
   
  };

  const result = useQuery({ queryKey: ["users"], queryFn: fetch });

  return result;
}
