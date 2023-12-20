/** @format */

import { Header } from './Header';
import { Asidebar } from './Sidebar';

const Layout = ({ children }: any) => {
	return (
		<>
			<div>
				<Header />
				<Asidebar />
			</div>
			<main >{children}</main>
		</>
	);
};

export default Layout;
