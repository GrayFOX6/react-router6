import { useParams } from 'react-router-dom';

export const UserDetail = () => {
	const params = useParams(); // returns an object of key-value pairs of the dynamic params from the current URL
	console.log('Params:', params);

	const { userId } = params; // id name needs to match the id name inside dynamic route, which is 'userId' in our case (path: '/users/:userId')

	return <h2>User {userId} Detail Page</h2>;
};
