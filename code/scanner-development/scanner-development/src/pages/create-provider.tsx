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

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Asidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { providerSchema } from '../utils/schema';
import { Input } from '../components/Form/Input';
import { Select } from '../components/Form/Select';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ENV } from '../environment/indext';
import useOrganisation from '../hooks/useOrganisation';
import useSpecialization from '../hooks/useSpecalization';
import { activeList } from '../utils/data';
import { useEffect, useState } from 'react';
import useCountry from '../hooks/useCountry';
import { Spinner } from '../components/Spinner';
import useProviderType from '../hooks/useProviderType';

export default function CreateProvider() {
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(location.search);
	const providerId = searchParams.get('providerId');
	const { data: organisationList } = useOrganisation();
	const { data: specializationList } = useSpecialization();
	const providerData = useProviderType();
	const [isLoading, setIsLoading] = useState(false);
	const [stateList, setStateList] = useState([]);
	const [cityList, setCityList] = useState([]);

	const countryList = useCountry();

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver<any>(providerSchema),
	});
	const watchedValueCountry = watch('country');
	const watchedValueState = watch('state');

	const onSubmit = async (data: any) => {
		const user =
			localStorage.getItem('auth') &&
			JSON.stringify(localStorage.getItem('auth'));
		console.log('user is', user);
		setIsLoading(true);
		try {
			const {
				providerName,
				street1,
				street2,
				state,
				city,
				phone1,
				email,
				mobile1,
				organizationId,
				providerNumber,
				providerTypeId,
				specializationId,
				password,
				firstName,
				lastName,
				fullName,
				clientId,
				active,
				country,
			} = data;

			const token = localStorage.getItem('token');
			const payload: any = {
				providerName: providerName,
				providerCode: providerName,
				street1,
				street2,
				provState: state,
				cityId: +city,
				stateId: +state,
				countryId: +country,
				phone1,
				mobile1,
				email,
				active: active,
				organizationId: +organizationId,
				providerNumber,
				user: clientId, 
				mcedtEmail: clientId,
				mcedtPass: password,
				clientId: clientId,
				providerTypeId: +providerTypeId,
				specializationId: +specializationId,
				firstName,
				lastName,
				fullName,
			};

			if (!providerId) {
				const response = await axios.post(
					`${ENV.BASE_URL}/provider/Create`,
					payload,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: token && `Bearer ${JSON.parse(token)}`,
						},
					}
				);
				if (response.status === 200) {
					setIsLoading(false);
					toast.success('Provider has been created successfully');
					navigate('/provider');
				}
			} else {
				payload.providerId = +providerId;
				const response = await axios.post(
					`${ENV.BASE_URL}/provider/update`,
					payload,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: token && `Bearer ${JSON.parse(token)}`,
						},
					}
				);
				if (response.status === 200) {
					setIsLoading(false);
					toast.success('Provider has been updated successfully');
					navigate('/provider');
				}
			}
		} catch (err: any) {
			setIsLoading(false);
			toast.error(err?.message || err);
		}
	};

	useEffect(() => {
		async function get(providerId: any) {
			console.log('providerIdproviderId', providerId);
			const payload = { providerId: +providerId };
			const token = localStorage.getItem('token');
			const response = await axios.post(
				`${ENV.BASE_URL}/provider/GetByid`,
				payload,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: token && `Bearer ${JSON.parse(token)}`,
					},
				}
			);
			if (response.status === 200) {
				const {
					providerName,
					street1,
					street2,
					state,
					city,
					country,
					phone1,
					email,
					mobile1,
					organizationId,
					providerNumber,
					providerTypeId,
					specializationId,
					password,
					firstName,
					lastName,
					fullName,
					clientId,
					active,
				}: any = response.data;

				setValue('Name', name);
				setValue('street1', street1);
				setValue('street2', street2);
				setValue('city', city);
				setValue('country', country);
				setValue('mobile1', mobile1);
				setValue('email', email);
				setValue('phone1', phone1);
				setValue('providerNumber', providerNumber);
				setValue('State', state);
				setValue('clientId', clientId);
				setValue('fullName', fullName);

				setValue('lastName', lastName);
				setValue('password', password);
				setValue('firstName', firstName);

				setValue('organizationId', organizationId);
				setValue('providerName', providerName);
				setValue('active', active ? true : false);

				setTimeout(() => {
					setValue('specializationId', specializationId);
					setValue('providerTypeId', providerTypeId);
				}, 500);
			}
		}

		if (providerId) get(providerId);
	}, []);

	useEffect(() => {
		const stateList = async (countryId: string) => {
			const payload = {
				CountryId: Number(countryId),
			};
			const token = localStorage.getItem('token');

			try {
				const response = await axios.post(
					`${ENV.BASE_URL}/States/GetByCountryId`,
					payload,
					{
						headers: {
							'Content-Type': 'application/json',
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
				console.log('Error is', error);
			}
		};

		if (watchedValueCountry) {
			console.log('State is');
			stateList(watchedValueCountry);
		}
	}, [watchedValueCountry]);

	useEffect(() => {
		const CityList = async (stateId: any) => {
			const token = localStorage.getItem('token');
			try {
				const payload = {
					StateId: +stateId,
				};
				const response = await axios.post(
					`${ENV.BASE_URL}/Cities/GetByStateId`,
					payload,
					{
						headers: {
							'Content-Type': 'application/json',
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
				console.log('Error is', error);
			}
		};
		if (watchedValueState && watchedValueState) {
			CityList(watchedValueState);
		}
	}, [watchedValueState]);

	console.log('ggggg', countryList);
	return (
		<>
			<Header />
			<Asidebar />
			<div className='flex flex-col bg-white mt-20 ml-72 mr-8'>
				<h2 className='font-bold text-2xl py-4 px-4'>
					{providerId ? 'Update Provider' : 'Create Provider'}
				</h2>
				<div className='mb-6 p-8 shadow-lg p-y border rounded-md'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8'>
							<Input
								name='providerName'
								placeholder='Provider Name'
								label='Provider Name'
								error={errors}
								required={true}
								id={'organisation'}
								type='text'
								register={register}
							/>
							<Select
								name='organizationId'
								placeholder='Organization'
								id={'organizationId'}
								error={errors}
								required={true}
								type='text'
								register={register}
								options={organisationList?.orgTypeList || []}
							/>
							<Select
								name='providerTypeId'
								placeholder='Provider Type'
								id={'providerTypeId'}
								error={errors}
								required={true}
								type='text'
								register={register}
								options={providerData?.data?.providerListType || []}
							/>
							<Select
								name='specializationId'
								placeholder='Specialiation'
								id={'specializationId'}
								error={errors}
								required={true}
								type='text'
								register={register}
								options={specializationList?.list || []}
							/>

							<Input
								name='firstName'
								placeholder='First Name'
								label='First Name'
								id={'email'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>
							<Input
								name='lastName'
								placeholder='Last Name'
								label='Last Name'
								id={'lastName'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>
							<Input
								name='fullName'
								placeholder='Full Name'
								label='Full Name'
								id={'fullName'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>

							<Input
								name='providerNumber'
								placeholder='Provider No'
								label='Provider No'
								id={'providerNumber'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>
							<Input
								name='clientId'
								placeholder='User Id'
								label='User Id'
								id={'clientId'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>
							<Input
								name='password'
								placeholder='Password'
								label='Password'
								id={'password'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>

							<Input
								name='street1'
								placeholder='Street1'
								label='Street1'
								error={errors}
								required={true}
								id={'street1'}
								type='text'
								register={register}
							/>
							<Input
								name='street2'
								placeholder='Street2'
								label='Street2'
								id={'street2'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>
							<Select
								name='country'
								placeholder='Country'
								id='country'
								options={countryList?.list || []}
								error={errors}
								style='w-full'
								required={false}
								register={register}
							/>
							<Select
								name='state'
								placeholder='Prov State'
								id={'state'}
								error={errors}
								required={true}
								type='text'
								register={register}
								options={stateList || []}
							/>
							<Select
								name='city'
								placeholder='City'
								options={cityList || []}
								id={'city'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>

							<Input
								name='mobile1'
								placeholder='Mobile'
								label='Mobile'
								id={'mobile1'}
								error={errors}
								required={true}
								type='text'
								register={register}
								maxLength={10}
							/>
							<Input
								name='phone1'
								placeholder='Phone'
								label='Phone'
								id={'phone1'}
								error={errors}
								required={true}
								type='text'
								register={register}
								maxLength={10}
							/>
							<Input
								name='email'
								placeholder='Email'
								label='Email'
								id={'email'}
								error={errors}
								required={true}
								type='text'
								register={register}
							/>
							<Select
								name='active'
								placeholder='Status'
								id={'active'}
								error={errors}
								required={true}
								type='text'
								style='w-full'
								register={register}
								options={activeList || []}
								defaultValue={''}
							/>
						</div>

						<div className='flex gap-x-2 justify-end'>
							<button
								onClick={() => navigate('/provider')}
								type='button'
								className='bg-secondary flex justify-center items-center gap-x-4 py-2 text-base text-white px-10 float-right my-4 rounded-lg mx-4'>
								Back
							</button>

							<button
								type='submit'
								className='bg-secondary flex justify-center items-center gap-x-4 py-2 text-base text-white px-4 float-right my-4 rounded-lg mx-4'>
								{isLoading && <Spinner />}
								{providerId ? 'Update Provider' : 'Add Provider'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
