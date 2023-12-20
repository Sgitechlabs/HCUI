/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";
import { createOrganistionSchema } from "../utils/schema";
import { Header } from "../components/Header";
import { Asidebar } from "../components/Sidebar";
import { Select } from "../components/Form/Select";
import useCreatePost from "../hooks/useCreatePost";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { ENV } from "../environment/indext";
import useCountry from "../hooks/useCountry";
import { activeList } from "../utils/data";
import { Spinner } from "../components/Spinner";


type Inputs = {
  Name: string;
  Street1: string;
  Street2: string;
  City: string;
  State: string;
  Country: string;
  Phone1: number | string;
  Mobile1: number | string;
  Email: string;
  NbrOfProvider: string;
  Active?: boolean | string;
};

export default function CreateOrganisation() {
  const [createOrg] = useCreatePost();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orgId = searchParams.get("orgId");
  const [isLoading, setIsLoading] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createOrganistionSchema),
  });
  const countryList = useCountry();
  const watchedValueCountry = watch("Country");
  const watchedValueState =  watch("State")

   
  const onSubmit = async (data: Inputs) => {
    try {
      setIsLoading(true);
      if (!orgId) await createOrg(data);
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
      } = data;
      const payload: any = {
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
        Active: Boolean(data.Active),
        ProvState: State,
      };

      const token = localStorage.getItem("token");

      if (orgId) {
        payload.organizationId = +orgId;

        const response = await axios.post(
          "https://ccrdrapi.ccrdr.com:8087/api/Organization/Update",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        if (response.status === 200) {
          setIsLoading(false);
          toast.success("Organization has been updated successfully");
          navigate("/organisation");
        }
      } else {
        const response = await axios.post(
          "https://ccrdrapi.ccrdr.com:8087/api/Organization/Create",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        if (response.status === 200) {
          setIsLoading(false);
          toast.success("Organization has been created successfully");
          navigate("/organisation");
        }
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.message || error);
    }
  };

  useEffect(() => {
    async function get(orgId: any) {
      const payload = { organizationId: +orgId };
      const token = localStorage.getItem("token");
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
      if (response.status === 200) {
        const {
          name,
          phone1,
          city,
          country,
          mobile1,
          email,
          street1,
          street2,
          nbrOfProvider,
          state,
          active,
        } = response.data;
        setValue("Name", name);
        setValue("Street1", street1);
        setValue("Street2", street2);
        setValue("City", city);
        setValue("Country", country);
        setValue("Mobile1", mobile1);
        setValue("Email", email);
        setValue("Phone1", phone1);
        setValue("NbrOfProvider", nbrOfProvider);
        setValue("State", state);
        setValue("Active", active ? true : false);
      }
    }
    if (orgId) get(orgId);
  }, []);

   
  useEffect(() => {
    const stateList = async (countryId: string) => {
      const payload = {
        CountryId: Number(countryId),
      };
      const token = localStorage.getItem("token");

      try {
        const response = await axios.post(
          `${ENV.BASE_URL}/States/GetByCountryId`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        const stateList = response?.data?.map((item: any) => {
          return {
            id: item.id,
            title: item?.name,
          };
          
        });
        setStateList(stateList);
      } catch (error: any) {
        console.log("Error is", error);
      }
    };
    
    if (watchedValueCountry) {
      console.log("State is",)
      stateList(watchedValueCountry);
    }
   
  }, [watchedValueCountry]);

  useEffect(()=>{
    const CityList = async (stateId: any) => {
      const token = localStorage.getItem("token");
      try {
        const payload = {
          StateId: +stateId,
        };
        const response = await axios.post(
          `${ENV.BASE_URL}/Cities/GetByStateId`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token && `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        const cityList = response?.data?.map((item: any) => {
          return {
            id: item.id,
            title: item?.name,
          };
        });
        setCityList(cityList);
      } catch (error: any) {
        console.log("Error is", error);
      }
    };
    if (watchedValueState && watchedValueState) {
      CityList(watchedValueState);
    }


  } , [watchedValueState])


  return (
    <>
      <Header />
      <Asidebar />
      <div className="mt-20 ml-72 mr-8">
        <h2 className="font-bold text-2xl py-4">
          {orgId ? "Update Organization" : "Create  Organization"}
        </h2>
        <div className="flex flex-col bg-white py-8 px-4 mb-8 border rounded-md shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-6">
              <Input
                name="Name"
                label="Organization"
                placeholder="Organization"
                error={errors}
                required={true}
                id={"Name"}
                type="text"
                register={register}
              />
              <Input
                name="NbrOfProvider"
                label="Nbr of Provider"
                placeholder="Nbr of Provider"
                id={"NbrOfProvider"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="Email"
                label="E-mail"
                placeholder="E-mail"
                id={"Email"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Select
                name="Active"
                placeholder="Active"
                id={"Active"}
                error={errors}
                required={true}
                type="text"
                style="w-full"
                register={register}
                options={activeList || []}
                defaultValue={""}
              />

              <Input
                name="Street1"
                placeholder="Stree1"
                label="Street1"
                error={errors}
                required={true}
                id={"Street1"}
                type="text"
                register={register}
              />
              <Input
                placeholder="Stree2"
                name="Street2"
                label="Street2"
                id={"Street2"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />

              <Select
                name="Country"
                placeholder="Country"
                id={"Country"}
                error={errors}
                required={true}
                type="text"
                style="w-full"
                register={register}
                options={countryList?.list || []}
                defaultValue={""}
              />
              <Select
                name="State"
                placeholder="Prov State"
                id={"State"}
                error={errors}
                required={true}
                type="text"
                style="w-full"
                register={register}
                options={stateList || []}
                defaultValue={""}
              />
              <Select
                name="City"
                placeholder="City"
                id={"City"}
                error={errors}
                required={true}
                type="text"
                options={cityList || []}
                register={register}
              />

              
              <Input
                name="Phone1"
                label="Phone"
                placeholder="Phone"
                id={"Phone1"}
                error={errors}
                required={true}
                maxLength={10}
                type="text"
                register={register}
              />

              <Input
                name="Mobile1"
                label="Mobile"
                placeholder="Mobile"
                id={"Mobile1"}
                error={errors}
                required={true}
                type="text"
                maxLength={10}
                register={register}
              />
            </div>
            <div className="flex justify-end gap-x-4">
              <button
                onClick={() => navigate("/organisation")}
                type="button"
                className="bg-secondary flex justify-center items-center gap-x-4 py-2 text-base text-white px-10 float-right my-4 rounded-lg mx-4"
              >
                Back
              </button>

              <button className="bg-secondary py-2 text-base text-white px-4 float-right my-4 rounded-md">
                {isLoading && <Spinner />}
                {orgId ? "Update Organization " : "Add Organization"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
