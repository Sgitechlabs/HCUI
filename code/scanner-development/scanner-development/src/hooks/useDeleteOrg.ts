/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import axios from 'axios'
import { ENV } from '../environment/indext'
import { toast } from 'react-toastify'

export default function useDeleteOrg() {
  const [state, setState] = React.useReducer((_:null, action:any) => action, {
    isIdle: true,
  })

  const mutate = React.useCallback(async (payload:number) => {
    setState({ isLoading: true })
    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
          `${ENV.BASE_URL}/Organization/Delete`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
       
     if(response.status === 200){
        toast.success("organisation deleted successfully")
        setState({ isSuccess: true })
        window.location.reload();
     }
 
    } catch (error:any) {
        toast.error(error?.message)
      setState({ isError: true, error })
    }
  }, [])

  return [mutate, state]
}
