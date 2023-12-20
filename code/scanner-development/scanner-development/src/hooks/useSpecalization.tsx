/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { ENV } from "../environment/indext";
import { useQuery } from "react-query";

export default function useSpecialization() {
 

  const fetch = async () => {
    const payload = {
      Active: true,
    };
    
 
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${ENV.BASE_URL}/Specialization/GetAll`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if (response.status === 200) {
        const list = response.data.map((item: any ) => {
          return {
            id: item.specializationId, 
            title:item.specialization1
          };
        });

        return { isSuccess: true,  list }
      }
     
  };
  const response = useQuery({ queryKey: ["specialization"], queryFn: fetch });

  return response;

  
}
