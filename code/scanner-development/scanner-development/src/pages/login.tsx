/** @format */

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Form/Input";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { urlPath } from "../utils/Url";

type Inputs = {
  Email: string;
  Password: string;
};

const authLogin = async (data: Inputs) => {
  const response = await axios.post(
    "https://ccrdrapi.ccrdr.com:8087/api/Auth/Login",
    data
  );
  return response;
};

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation(authLogin, {
    onSuccess: (response) => {
      const { data } = response;
      // console.log("Data is" , data)
      localStorage.setItem("auth", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      setIsLoading(false);
      
      navigate("/validation");
    },
    onError: () => {
  
      setAuthError("User name or Password is incorrect");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setIsLoading(true);
    const login = {
      ...data,
    };
    mutate(login);
  };

  return (
    <section className="relative">
      <div className="bg-login bg-contain bg-no-repeat bg-center w-full h-1/2 z-10 absolute">
        <div className="bg-gradient-to-tr flex items-center justify-center flex-col gap-y-4 from-[#4f42ec] to-[#695eef] h-full bg-top  py-4 opacity-90">
          <h1 className="text-white text-center font-bold text-2xl">ccRDR</h1>
          <p className="text-center text-gray-200 font-base mb-12">Powered By Monsoon Network !</p>

        </div>
      </div>

      <div className="absolute bg-transparent h-1/2 z-30 w-full  md:top-0 flex items-end">
        <img className="w-full" src={`${urlPath.icon}wave.svg`} alt="icons" />
      </div>

      <div className="flex bg-white relative flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#/"
          className="flex items-center  text-2xl font-semibold text-gray-900 dark:text-white"
        ></a>
        <div className="w-full py-8 absolute z-30  bg-white md:bottom-24 rounded-lg shadow dark:border md:mt-0 sm:max-w-md ">
          {/* <div className='flex justify-center items-center'>
						<img src={`${urlPath.icon}logo-black.jpeg`} className='h-12 w-24' alt="icon" />
					</div> */}
          <h1 className="text-lg  text-center mb-3 leading-tight text-secondary tracking-tight   dark:text-white">
            Welcome back !
          </h1>

          <h1 className="text-base  text-center  leading-tight tracking-tight text-gray-400  bg-white dark:text-white">
            Sign in to continue to ccRDR.
          </h1>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              {authError && (
                <p className="text-red bg-red-300 text-red-500 p-2 text-center">
                  {authError}
                </p>
              )}

              {/* <div>
								<label
									htmlFor='hospital'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Provider
								</label>
								<select className=' border-gray-400 block w-full h-10 px-2 text-sm text-gray-800  border rounded-md focus:outline-none'>
									<option value=''>Select</option>
									{hospitalList?.map((option: any, index: any) => {
										return (
											<option value={`${option.id}`} key={`option-${index}`}>
												{option?.name}
											</option>
										);
									})}
								</select>
							</div> */}
              <div>
                <Input
                  label={"Email"}
                  type="email"
                  name="Email"
                  id="email"
                  style="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Email"
                  register={register}
                  error={errors}
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="Password"
                  label="Password"
                  id="password"
                  placeholder="Enter Password"
                  error={errors}
                  register={register}
                  style="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-x-4 text-white bg-hexa hover:bg-hexa focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading && <Spinner />} Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
