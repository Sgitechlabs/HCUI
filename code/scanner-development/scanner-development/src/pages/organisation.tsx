/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { useNavigate } from 'react-router-dom';
import { Table } from '../components/Table';
import { Header } from '../components/Header';
import { Asidebar } from '../components/Sidebar';
import useOrganisation from '../hooks/useOrganisation';
import { OrganisationColumn } from '../utils/columns/orgColumns';
import { Loading } from '../components/Loading';
 

export default function Organisation() {
	const navigate = useNavigate();
	const { isLoading, data, error }: any = useOrganisation();

	return (
		<>
			<Header />
			<Asidebar />
		
			<div className='mt-20 ml-72 mr-8'>
				<div className='flex justify-between items-center'>
					<h2 className='font-bold text-2xl py-4'>Organization</h2>
					<button
						className='bg-secondary text-white px-4 py-2 rounded-md'
						onClick={() => navigate('/create-organisation')}>
						Add Organization
					</button>
				</div>
				{isLoading ? (
					<div className='h-20 w-full flex justify-start items-center'>
						<Loading />
					</div>
				) : (
					<>
						{error ? (
							<p>{error?.message || 'Something went wrong'}</p>
						) : (
							<Table column={OrganisationColumn} data={data?.orgList || []} />
						)}
					</>
				)}
			</div>
		</>
	);
}
