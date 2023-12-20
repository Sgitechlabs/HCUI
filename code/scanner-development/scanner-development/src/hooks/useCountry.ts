/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useEffect } from "react";
import { ENV } from "../environment/indext";

export default function useCountry() {
  const [state, setState] = React.useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    const payload = {
      Active: true,
    };
    setState({ isLoading: true });
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${ENV.BASE_URL}/Country/GetAll`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token && `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      if (response.status === 200) {
        const list = response.data.map((item: any, ) => {
          console.log("Item is-----" , item)
          
          return {
            id: item.id,
            title: item?.name
          };
        });

        setState({ isSuccess: true, list: list });
      }
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    ...state,
    fetch,
  };
}
