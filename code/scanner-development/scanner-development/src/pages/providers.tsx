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
import useProvider from '../hooks/useProvider';
import { ProviderColumn } from '../utils/columns/EditProvider';
import { Loading } from '../components/Loading';

export default function Providers() {
	const navigate = useNavigate();
	const { isLoading, error, data }: any = useProvider();

	return (
		<>
			<Header />
			<Asidebar />
			<div className='mt-24 ml-72 mr-8'>
				<div className='flex justify-between items-center mb-4'>
					<h1 className='font-bold text-2xl'>Provider</h1>
					<button
						className='bg-secondary text-white px-4 py-2 rounded-md'
						onClick={() => navigate('/create-provider')}>
						Add Provider
					</button>
				</div>
				{isLoading ? (
					<div className='h-20 w-full flex justify-start items-center'>
						<Loading />
					</div>
				) : (
					<>
						{error ? (
							<>{error.message}</>
						) : (
							<Table column={ProviderColumn} data={data?.List || []} />
						)}
					</>
				)}
			</div>
		</>
	);
}
