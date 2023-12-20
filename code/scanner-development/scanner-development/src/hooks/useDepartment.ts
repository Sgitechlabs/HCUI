/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useEffect } from "react";
import { ENV } from "../environment/indext";

export default function useDepartment() {
  const [state, setState] = React.useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const provider = async () => {
    const payload = {
      Active: true,
    };
    setState({ isLoading: true });
    try {
      const token = localStorage.getItem("token");
      const url = `${ENV.BASE_URL}/Department/GetAll`
      const response = await axios.post(
        url,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if (response.status === 200) {
        
        const list = response.data.map((item: any,) => {
          return {
            id: item?.departmentId,
            title: item?.department1
          };
        });

        setState({ isSuccess: true,    list });
      }
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  useEffect(() => {
    provider();
  }, []);

  return {
    ...state,
    provider,
  };
}
