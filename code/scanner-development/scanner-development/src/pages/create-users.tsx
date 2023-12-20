/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "../components/Form/Select";
import { Input } from "../components/Form/Input";
import { Asidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ENV } from "../environment/indext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserSchema } from "../utils/schema";
import useProvider from "../hooks/useProvider";
import useDepartment from "../hooks/useDepartment";
import useUserRole from "../hooks/useUserRole";
import useOrganisation from "../hooks/useOrganisation";
import { useEffect, useState } from "react";
import useCountry from "../hooks/useCountry";
import { activeList } from "../utils/data";
import { Spinner } from "../components/Spinner";

export default function CreateUsers() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver<any>(UserSchema),
  });
 
  const [isLoading, setIsLoading] = useState(false);
  const { data: orgList } = useOrganisation();
  const { data: providerData }: any = useProvider();
  const departmentList = useDepartment();
  const userRoleData = useUserRole();
  const countryList = useCountry();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const navigate = useNavigate();
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const watchedValueCountry = watch("country");
  const watchedValueState =  watch("state")

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    try {
      const {
        firstName,
        userCode,
        lastName,
        middleName,
        userName,
        roleId,
        password,
        street1,
        street2,
        phone1,
        city,
        state,
        country,
        email,
        providerId,
        organizationId,
        departmentId,
        active,
        mobile1,
      } = data;
      const payload: any = {
        userCode,
        firstName,
        middleName,
        lastName,
        userName,
        password,
        street1,
        street2,
        provState: state,
        city,
        state,
        country,
        phone1,
        mobile1,
        email,
        active,
        providerId: +providerId,
        organizationId: +organizationId,
        departmentId: +departmentId,
        roleId: +roleId,
      };

      if (!userId) {
        const response = await axios.post(
          `${ENV.BASE_URL}/Users/Create`,
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
          toast.success("Users has been created successfully");
          navigate("/users");
        }
      } else {
        payload.userId = +userId;
        const response = await axios.post(
          `${ENV.BASE_URL}/Users/update`,
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
          toast.success("Users has been updated successfully");
          navigate("/users");
        }
      }
    } catch (error: any) {
      setIsLoading(false);

      toast.error(error?.message || error);
    }
  };

  useEffect(() => {
    async function get(userId: any) {
      const payload = { userId: +userId };
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${ENV.BASE_URL}/Users/GetByid`,
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
          firstName,
          lastName,
          middleName,
          userName,
          roleId,
          password,
          street1,
          street2,
          phone1,
          city,
          state,
          country,
          email,
          providerId,
          organizationId,
          departmentId,
          mobile1,
          userCode,
          active,
        }: any = response.data;

        setValue("Name", name);
        setValue("street1", street1);
        setValue("street2", street2);
        setValue("city", city);
        setValue("country", country);
        setValue("mobile1", mobile1);
        setValue("email", email);
        setValue("phone1", phone1);
        setValue("middleName", middleName);
        setValue("userName", userName);
        setValue("state", state);

        setValue("lastName", lastName);
        setValue("password", password);
        setValue("firstName", firstName);
        setValue("userCode", userCode);
        setValue("active", active ? true : false);

        setTimeout(() => {
          setValue("organizationId", organizationId);
          setValue("providerId", providerId);
          setValue("departmentId", departmentId);
          setValue("roleId", roleId);
        }, 500);
      }
    }

    if (userId) get(userId);
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
        console.log("Stetetetet" , stateList)
        setStateList(stateList);
      } catch (error: any) {
        console.log("Error is", error);
      }
    };
    
    if (watchedValueCountry) {
      console.log("State is", watchedValueCountry)
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
      <div className="flex flex-col bg-white px-4 mt-20 ml-72 mr-8">
        <h2 className="font-bold text-xl py-4">{userId ? "Update Users": "Create Users"}</h2>
        <div className="shadow-lg p-8 border rounded-lg mb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 ">
              <Select
                name="organizationId"
                placeholder="Organization"
                id="Organization"
                type="text"
                options={orgList?.orgTypeList || []}
                register={register}
                error={errors}
                style="w-full"
                required={true}
              />
              <Select
                name="providerId"
                placeholder="Provider"
                id="providerId"
                type="text"
                options={providerData?.providerListType || []}
                register={register}
                error={errors}
                style="w-full"
                required={true}
              />
              <Select
                name="departmentId"
                placeholder="Department"
                id="departmentId"
                type="text"
                options={departmentList.list || []}
                register={register}
                error={errors}
                style="w-full"
                required={true}
              />
              <Select
                name="roleId"
                placeholder="Role"
                id="roleId"
                type="text"
                options={userRoleData?.roleList || []}
                register={register}
                error={errors}
                style="w-full"
                required={true}
              />
              <Input
                name="firstName"
                placeholder="First Name"
                label="First Name"
                error={errors}
                required={true}
                id={"firstName"}
                type="text"
                register={register}
              />
              <Input
                name="middleName"
                placeholder="Middle Name"
                label="Middle Name"
                id={"middleName"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
                id={"lastName"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="userName"
                placeholder="User Name"
                label="User Name"
                id={"userName"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="userCode"
                placeholder="User Code"
                label="User Code"
                id={"userCode"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="password"
                placeholder="Password"
                label="Password"
                id={"password"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="street1"
                placeholder="Street1"
                label="Street1"
                error={errors}
                required={true}
                id={"street1"}
                type="text"
                register={register}
              />
              <Input
                name="street2"
                placeholder="Street2"
                label="Stree2"
                id={"street2"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Select
                name="country"
                placeholder="Country"
                id="country"
                type="text"
                options={countryList.list || []}
                register={register}
                error={errors}
                style="w-full"
                required={true}
              />
               <Select
                name="state"
                placeholder="Prov State"
                id={"state"}
                error={errors}
                required={true}
                type="text"
                register={register}
                options={stateList || []}
              />
              <Select
                name="city"
                placeholder="City"
                 options={cityList || []}
                id={"city"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              
              <Input
                name="mobile1"
                placeholder="Mobile"
                id={"mobile1"}
                label="Mobile"
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="phone1"
                placeholder="Phone"
                label="Phone"
                id={"Phone"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Input
                name="email"
                placeholder="Email"
                label="Email"
                id={"email"}
                error={errors}
                required={true}
                type="text"
                register={register}
              />
              <Select
                name="active"
                placeholder="Status"
                id={"active"}
                error={errors}
                required={true}
                type="text"
                style="w-full"
                register={register}
                options={activeList || []}
                defaultValue={""}
              />
            </div>

            <div className="flex justify-end gap-x-4">
              <button
                onClick={() => navigate("/users")}
                type="button"
                className="bg-secondary flex justify-center items-center gap-x-4 py-2 text-base text-white px-10 float-right my-4 rounded-lg mx-4"
              >
                Back
              </button>

              <button className="bg-secondary flex justify-center items-center py-2 text-base text-white px-4 float-right my-4 rounded-lg">
                {isLoading && <Spinner />}
                {userId ? "Update User" : "Add User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
