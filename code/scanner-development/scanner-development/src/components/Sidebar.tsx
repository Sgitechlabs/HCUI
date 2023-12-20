/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */
import { Link, useLocation } from 'react-router-dom';
import { urlPath } from '../utils/Url';
export const Asidebar = () => {
	const { pathname } = useLocation();
	const sidebar = [
		{
			title: 'Validation',
			path: '/validation',
			icon: 'validation.svg',
		},
		{
			title: 'Organization',
			path: '/organisation',
			icon: 'organization.svg',
		},
		{
			title: 'Provider',
			path: '/provider',
			icon: 'provider.svg',
		},
		{
			title: 'Users',
			path: '/users',
			icon: 'users.svg',
		},
	];

	return (
		<aside
			id='logo-sidebar'
			className='fixed top-[64px] mt-[6px] left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0'
			aria-label='Sidebar'>
			<div className='h-full overflow-y-auto shadow-lg bg-white dark:bg-gray-800 border'>
				<ul className='space-y-2 font-medium'>
					{sidebar.map((item: any) => {
						return (
							<li
								className={`${
									pathname.includes(item.path)
										? 'bg-[#695EEF] px-4 text-white'
										: 'px-4 text-gray-900'
								}`}>
								<Link
									to={item.path}
									className='flex items-center p-2  rounded-lg group'>
									<img
										className='h-6 w-6'
										src={`${urlPath.icon}${item.icon}`}
										alt='icons'
									/>

									<span className='ms-3'>{item?.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};
