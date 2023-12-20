/** @format */

import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Validation from './pages/validation';
import Organisation from './pages/organisation';
import Users from './pages/users';
import Providers from './pages/providers';
import CreateProvider from './pages/create-provider';
import CreateOrganisation from './pages/create-organisation';
import CreateUsers from './pages/create-users';

function App() {
	return (
		<div className='min-h-screen'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='*' element={<Login />} />
				<Route path='/validation' element={<Validation />} />
				<Route path='/organisation' element={<Organisation />} />
				<Route path='/users' element={<Users />} />
				<Route path='/provider' element={<Providers />} />
				<Route path='/create-provider' element={<CreateProvider />} />
				<Route path='/create-organisation' element={<CreateOrganisation />} />
				<Route path='/create-users' element={<CreateUsers />} />
			</Routes>
		</div>
	);
}

export default App;
