/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Tab } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { Input } from '../components/Form/Input';
import { codeVersionSchema } from '../utils/schema';
import { Header } from '../components/Header';
import { Asidebar } from '../components/Sidebar';
import axios from 'axios';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export default function Validation() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver<any>(codeVersionSchema),
	});

	const [versionCodeCd, setVersionCodeCd] = useState<any>('');
	const [serviceCode, setServiceCode] = useState<any>('');

	const [cdrError, setCDRError] = useState('');
	const [healthCard, setHealthCard] = useState<any>({});
	const [serviceDetails, setServiceDetails] = useState<any>({});

	const [isLoading, setIsLoading] = useState(false);
	const [isHealthReportLoading, setIsHealthReportLoading] = useState(false);

	const [categories] = useState({
		'ccRDR® Scan': '',
		Manual: '',
	});

	const cdRDRInputChange = (e: any, value: any) => {
		console.log('sss', e.target.value.length, value);
		if (value == 'HCCode') {
			setVersionCodeCd(e.target.value);
		}
		if (value == 'serviceCode') {
			setServiceCode(serviceCode);
		}

		// if (
		// 	e.target.value.length == 0 ||
		// 	(e.target.value.length == 4 && value == 'ServiceCode')
		// ) {

		if (value == 'HCCode' && e.target.value.length != 12) {
			setCDRError('Invalid HC Version Code');
			setHealthCard({});
			setServiceDetails({});
		} else if (value == 'HCCode' && e?.target?.value?.length == 12) {
			setCDRError('');
		}
		// } else {
		// 	setServiceCode('Invalid Service Code');
		// }
	};

	const handleEnter = (e: any) => {
		const hc = e?.target?.value?.substring(0, 10);
		const versionCode = e?.target?.value.substring(10);
		if (versionCodeCd?.length == 12 && e?.key === 'Enter') {
			const body = {
				HN: hc,
				vc: versionCode,
				hcvtype: 'S',
				sc: serviceCode,
			};
			getHeathCardData(body);
			// alert('Enter Pressed');
		}
		if (versionCodeCd?.length == 12 && e?.key === 'Escape') {
			const body = {
				HN: hc,
				vc: versionCode,
				hcvtype: 'S',
				sc: serviceCode,
			};
			getHeathCardData(body);
			// alert('Escape Pressed');
		}
	};

	const tabChanged = () => {
		reset();
		setCDRError('');
		setHealthCard({});
		setServiceDetails({});
	};

	useEffect(() => {
		console.log('version code value');
	}, [versionCodeCd]);

	const onSubmit = async (data: any) => {
		setIsLoading(true);
		const body = {
			HN: data?.hc,
			vc: data?.versionCode,
			hcvtype: 'M',
			sc: data?.serviceCode,
		};
		getHeathCardData(body);
	};

	const getHeathCardData = async (body: any) => {
		setIsHealthReportLoading(true);

		try {
			const token = localStorage.getItem('token');
			const response = await axios.post(
				'https://ccrdrapi.ccrdr.com:8087/api/HcValidation/ValidateHealthCardByOhip',
				body,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: token && `Bearer ${JSON.parse(token)}`,
					},
				}
			);
			console.log(response, 'Response');

			if (response && response?.data) {
				setIsLoading(false);
				setIsHealthReportLoading(false);
				setHealthCard(response?.data);
				setServiceDetails(
					response?.data?.feeServiceDetail
						? response?.data?.feeServiceDetail[0]
						: {}
				);
			}
		} catch (err) {
			setIsHealthReportLoading(false);
			setIsLoading(false);
			setHealthCard({});
			setServiceDetails({});
		}
	};

	return (
		<>
			<Header />
			<Asidebar />
			<div className='mt-20 ml-72 mr-8'>
				<h1 className='font-bold text-2xl'>Validation</h1>
				<div className='w-full px-2 py-6 sm:px-0'>
					<Tab.Group>
						<Tab.List className='flex space-x-1 bg-primary p-1'>
							{Object.keys(categories).map((category) => (
								<Tab
									key={category}
									onClick={tabChanged}
									className={({ selected }) =>
										classNames(
											'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
											// 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
											selected
												? 'bg-white text-black shadow'
												: 'text-blue-100  hover:text-white'
										)
									}>
									{category}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className=''>
							<Tab.Panel
								className={classNames(
									'rounded-xl bg-white outline-none'
									// 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none outline-none focus:ring-2'
								)}>
								<div className='border border-gray-400 p-4 outline-none flex'>
									<div className='flex flex-col mb-8 w-60 relative'>
										<label className='text-gray-900 text-base text-left mb-2 '>
											HC Version Code
										</label>

										<input
											type='text'
											name='code'
											id='code'
											maxLength={12}
											onKeyDown={handleEnter}
											onChange={(e: any) => cdRDRInputChange(e, 'HCCode')}
											className='border rounded-md border-gray-300  text-gray-900 sm:text-sm  block w-full p-2.5 dark:text-white'
										/>
										{cdrError && (
											<label className='ml-0 pt-2 absolute top-[70px] text-red-600 text-left justify-start  text-xs'>
												{cdrError}
											</label>
										)}
									</div>
									<div className='flex flex-col mb-8 w-60 relative ml-4'>
										<label className='text-gray-900 text-base text-left mb-2'>
											Service Code
										</label>

										<input
											type='text'
											name='serviceCode'
											id='serviceCode'
											maxLength={4}
											onChange={(e: any) => cdRDRInputChange(e, 'serviceCode')}
											className='border rounded-md border-gray-300  text-gray-900 sm:text-sm  block w-full p-2.5 dark:text-white'
										/>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel
								className={classNames(
									'rounded-xl bg-white'
									// 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
								)}>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='border border-gray-400 p-4'>
										<div className='flex flex-col gap-y-6'>
											<div className='flex gap-x-4'>
												<Input
													type='number'
													register={register}
													error={errors}
													id={'hc'}
													label={'HC'}
													required={true}
													name='hc'
													maxLength={10}
												/>
												<Input
													type='text'
													register={register}
													error={errors}
													id={'hc'}
													required={true}
													label={'Version Code'}
													maxLength={2}
													name='versionCode'
												/>
												<Input
													type='text'
													register={register}
													error={errors}
													id={'serviceCode'}
													required={true}
													label={'Service Code'}
													maxLength={4}
													name='serviceCode'
												/>
											</div>
											<button
												type='submit'
												className='text-center relative text-white bg-[#695EEF] w-[18%] items-center py-2 border rounded-md'>
												<p
													className={`${
														isLoading
															? ' h-[20px] w-[20px] absolute top-[9px] right-8 animate-spin rounded-full border-2 border-dashed border-white'
															: ''
													}`}
												/>
												Validate
											</button>
										</div>
									</div>
								</form>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>

				<section className='flex flex-col'>
					<div className='border border-gray-400 rounded-md overflow-hidden'>
						<h1 className='text-center font-medium text-base text-white bg-primary py-2'>
							Health Report{' '}
						</h1>

						{healthCard?.mohmessage && !isHealthReportLoading && (
							<p className='text-green-500 text-center py-2'>
								{healthCard?.mohmessage}
							</p>
						)}
						{!isHealthReportLoading ? (
							<div className='flex flex-col gap-y-2 p-4'>
								<div className='grid grid-cols-4'>
									<div>
										<h2 className='text-sm'>MOH Message</h2>
										<p className='text-sm'>{healthCard?.mohmessage || '-'}</p>
									</div>
									<div>
										<h2 className='text-sm'>MOH Response Code</h2>
										<p className='text-sm'>{healthCard?.mohresponseCode}</p>
									</div>
									<div>
										<h2 className='text-sm'>Last Service Date</h2>
										<p className='text-sm'>
											{healthCard?.lastServiceDate
												? format(
														new Date(healthCard?.lastServiceDate),
														'dd/MM/yyyy'
												  )
												: '-'}
										</p>
									</div>
									<div>
										<h2 className='text-sm'>MOH Action</h2>
										<p className='text-sm'>{healthCard?.mohaction || '-'}</p>
									</div>
								</div>

								<div className='grid grid-cols-4 pt-2 border-0 border-t-2'>
									<div>
										<h2 className='text-sm'>First Name</h2>
										<p className='text-sm'>{healthCard?.firstName || '-'}</p>
									</div>

									<div>
										<h2 className='text-sm'>Second Name</h2>
										<p className='text-sm'>{healthCard?.secondName || '-'}</p>
									</div>
									<div>
										<h2 className='text-sm'>Last Name</h2>
										<p className='text-sm'>{healthCard?.lastName || '-'}</p>
									</div>
									<div>
										<h2 className='text-sm'>DOB</h2>
										<p className='text-sm'>{healthCard?.dob || '-'}</p>
									</div>
								</div>
								<div className='grid grid-cols-4'>
									<div>
										<h2 className='text-sm'>Gender</h2>
										<p className='text-sm'>{healthCard?.gender || '-'}</p>
									</div>
									<div>
										<h2 className='text-sm'>Age</h2>
										<p className='text-sm'>{healthCard?.age || '-'}</p>
									</div>
								</div>

								<div className='grid grid-cols-4 pt-2 border-0 border-t-2 '>
									<div>
										<h2 className='text-sm'>Health Card No</h2>
										<p className='text-sm'>{healthCard?.hcnumber || '-'}</p>
									</div>
									<div>
										<h2 className='text-sm'>Version Code</h2>
										<p className='text-sm'>
											{healthCard?.hcversionCode || '-'}
										</p>
									</div>
									<div>
										<h2 className='text-sm'>Expiry Date</h2>
										<p className='text-sm'>
											{healthCard?.expireDate
												? format(new Date(healthCard?.expireDate), 'dd/MM/yyyy')
												: '-'}
										</p>
									</div>
								</div>
								<div className='grid grid-cols-4 pt-2 border-0 border-t-2 '>
									<div>
										<h2 className='text-sm'>MOH Response ID</h2>
										<p className='text-sm'>
											{healthCard?.mohresponseId || '-'}
										</p>
									</div>

									<div>
										<h2 className='text-sm'>MOH Fee Service Details</h2>
										<p className='text-sm'>
											{healthCard?.mohfeeServiceDetails || '-'}
										</p>
									</div>
								</div>
								<div className='grid grid-cols-4 pt-2 border-0 border-t-2 '>
									<div>
										<h2 className='text-sm'>Fee Service Code</h2>
										<p className='text-sm'>
											{serviceDetails?.feeServiceCode || '-'}
										</p>
									</div>
									<div>
										<h2 className='text-sm'>Fee Service Date Specified</h2>
										<p className='text-sm'>
											{serviceDetails?.feeServiceDateSpecified == false
												? 'false'
												: serviceDetails?.feeServiceDateSpecified || '-'}
										</p>
									</div>
									<div>
										<h2 className='text-sm'>Fee Service Response Code</h2>
										<p className='text-sm'>
											{serviceDetails?.feeServiceResponseCode || '-'}
										</p>
									</div>

									<div>
										<h2 className='text-sm'>
											Fee Service Response Description
										</h2>
										<p className='text-sm'>
											{serviceDetails?.feeServiceResponseDescription || '-'}
										</p>
									</div>
								</div>
							</div>
						) : (
							<div className='h-40 justify-center flex items-center'>
								<p className='h-[40px] w-[40px] text-red animate-spin rounded-full border-2 border-dashed border-gray-500' />
							</div>
						)}
					</div>
				</section>
			</div>
		</>
	);
}
