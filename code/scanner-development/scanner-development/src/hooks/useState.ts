/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

// import axios from 'axios';
// import ENV from '../environment/indext';
import { useQuery } from 'react-query';

export default function useStateData(countryId: number) {
	const fetch = async (countryId: number) => {
		// const payload = {
		// 	Active: true,
		// };

		console.log('CountrY if', countryId);
		// const token = localStorage.getItem('token');

		//   const response = await axios.post(
		//     `${ENV.BASE_URL}/Country/GetAll`,
		//     payload,
		//     {
		//       headers: {
		//         "Content-Type": "application/json",
		//         Authorization: token && `Bearer ${JSON.parse(token)}`,
		//       },
		//     }
		//   );
		//   if (response.status === 200) {
		//     const list = response.data.map((item: any, ) => {

		//       return {
		//         id: item.id,
		//         title: item?.name
		//       };
		//     });

		//   }
		return 'Okk';
	};

	const response = useQuery({
		queryKey: ['state', countryId],
		queryFn: () => fetch(countryId),
	});
	return response;
}
