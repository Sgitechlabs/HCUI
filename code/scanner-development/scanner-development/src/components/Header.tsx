/** @format */

import { urlPath } from '../utils/Url';
import { Container } from './Container';
import MenuList from './Menu';
// import MenuList from './Menu';

export const Header = () => {
	const userData = localStorage.getItem('auth');
	const userDetails = userData ? JSON.parse(userData) : 'TestOne';

	return (
		<header className='mx-auto bg-[#132649] border shadow-lg z-10 fixed top-0 w-full'>
			<Container>
				<nav className='py-3 mx-auto dark:bg-gray-800 '>
					<div className='flex justify-between items-center mx-auto '>
						<span className='self-center gap-x-2 text-lg whitespace-nowrapdark:text-white'>
							<div className='flex gap-28 -ml-2'>
								<div>
									<img src={`${urlPath.icon}logo.png`} className='w-28' />
								</div>
								<div className='text-white  text-xs font-normal '>
									<p className='capitalize font-bold text-base py-0 my-0'>
										{userDetails?.organization}
									</p>
									<span>
										{' '}
										<b>Provider:</b> {userDetails?.provider}
									</span>
									<span className='px-[2px]'>,</span>
									<span>
										<b>Department:</b> {userDetails?.department}
									</span>
								</div>
							</div>
						</span>

						<div className='flex items-center'>
							<div className='flex justify-center items-center gap-x-2'>
								<img
									src={`${urlPath.icon}user.png`}
									alt='icon'
									className='h-8 w-8'
								/>
								<MenuList title={userDetails?.firstName} />
							</div>

							<button
								data-collapse-toggle='mobile-menu-2'
								type='button'
								className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
								aria-controls='mobile-menu-2'
								aria-expanded='false'>
								<span className='sr-only'>Open main menu</span>
								<svg
									className='w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
										clipRule='evenodd'></path>
								</svg>
								<svg
									className='hidden w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</button>
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
};
