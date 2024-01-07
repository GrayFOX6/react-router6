import { RouteObject } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';

export const bookRoutes: RouteObject[] = [
	// {
	// 	path: '/books',
	// 	element: <BookList />,
	// },
	{
		path: '/*',
		element: <NotFound />,
	},
];
