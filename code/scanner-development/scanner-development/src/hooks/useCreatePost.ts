/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useCallback, useReducer } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

export default function useCreatePost() {
  const navigate = useNavigate()
  // 1 A function
  // 2 default state object

  const [state, dispatch] = useReducer((_: null, action: any) => action, {
    isIdle: true,
  });

  const mutate = useCallback(async (values: any) => {
    console.log("Values os", values);
    const {
      Name,
      Street1,
      Street2,
      State,
      Phone1,
      Mobile1,
      Email,
      NbrOfProvider,
      Country,
      City,
    } = values;
    const token = localStorage.getItem("token");
    const payload = {
      Name,
      Street1,
      Street2,
      City,
      State,
      Country,
      Phone1,
      Mobile1,
      Email,
      NbrOfProvider: +NbrOfProvider,
      Code: "mm",
      Active: true,
      ProvState:"India",
    };

     
    dispatch({ isLoading: true });
    try {
      const response = await axios.post(
        "https://ccrdrapi.ccrdr.com:8087/api/Organization/Create ",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if(response.status === 200){
        toast.success("Organization has been created")
       
        dispatch({ isSuccess: true, message: "Organization has been created" });
        navigate("/organisation")

      }
      
    } catch (error) {
      dispatch({ isError: true, error });
    }
  }, []);

  // return the function and state
  return [mutate, state];
}
