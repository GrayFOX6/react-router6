import { Navigate, RouteObject } from 'react-router-dom';
import Login from '../pages/Login';
import { NotFound } from '../pages/NotFound';

// http://localhost:3000 is root path

export const publicRoutes: RouteObject[] = [
	// {
	// 	path: '/',
	// 	element: <Navigate to="/login" />,
	// },
	{
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
