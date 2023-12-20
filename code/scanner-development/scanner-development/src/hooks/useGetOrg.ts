/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useCallback, useReducer } from "react";
import { ENV } from "../environment/indext";

export default function useGetOrg() {
  
  // 1 A function
  // 2 default state object

  const [state, dispatch] = useReducer((_: null, action: any) => action, {
    isIdle: true,
  });

  const mutate = useCallback(async (payload: any) => {

    const token = localStorage.getItem("token");
 
     
    dispatch({ isLoading: true });
    try {
      const response = await axios.post(
        `${ENV.BASE_URL}/Organization/GetByid`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if(response.status === 200){
        console.log("Response s" , response)
        dispatch({ isSuccess: true, details: response.data });

      }
      
    } catch (error) {
      dispatch({ isError: true, error });
    }
  }, []);

  // return the function and state
  return [mutate, state];
}
