import { Navigate, RouteObject } from 'react-router-dom';
import Login from '../components/Login';
import { NotFound } from '../components/NotFound';

// http://localhost:3000 is root path

export const publicRoutes: RouteObject[] = [
	{
		//path: '/',
		index: true,
		element: <Navigate to="/login" />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/*',
		element: <NotFound />,
	},
];
