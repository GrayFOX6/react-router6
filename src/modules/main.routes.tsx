import React from 'react';
import { RouteObject } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { Home } from '../components/Home';
import OrderSummary from '../components/OrderSummary';
import { Products } from '../components/Products';
import { NewProducts } from '../components/NewProducts';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Users } from '../components/Users';
import { UserDetail } from '../components/UserDetail';
import { Admin } from '../components/Admin';
import { Profile } from '../components/Profile';
import Login from '../components/Login';

const LazyAbout = React.lazy(() => import('../components/About')); // For dynamic imports we need to have default export, named export wont work

export const bookRoutes: RouteObject[] = [
	{
		index: true, // matches http://localhost:3000
		element: <Home />,
		errorElement: <div>errorElement in Home</div>,
	},
	// {
	// 	path: '/about',
	// 	element: (
	// 		<React.Suspense fallback={<div>Loading...</div>}>
	// 			<LazyAbout />,
	// 		</React.Suspense>
	// 	),
	// 	errorElement: <div>errorElement in LazyAbout</div>,
	// },
	{
		path: '/order-summary',
		element: <OrderSummary />,
		errorElement: <div>errorElement in OrderSummary</div>,
	},
	{
		path: '/products',
		element: <Products />,
		children: [
			// Every time we have children, we need to have Outlet in parent component (Products)
			{
				path: 'new',
				element: <NewProducts />,
			},
			{
				path: 'featured',
				element: <FeaturedProducts />,
			},
			{
				// When we navigate to parent route: '/products', the router will automatically switch to products/featured element, since this nested route is marked as index
				// But in the URL, it wont be '/products/featured', only '/products'
				index: true, // The path will still be as the parent route, but it will show the indexed element (FeaturedProducts)
				element: <FeaturedProducts />,
			},
		],
	},
	{
		path: '/users',
		element: <Users />,
		children: [
			// Every time we have children, we need to have Outlet in parent component (Users)
			{
				path: '/users/:userId', // id can be of any name, and of number or string type
				element: <UserDetail />,
			},
			{
				path: '/users/admin',
				element: <Admin />,
			},
		],
	},
	{
		path: '/profile',
		element: <Profile />,
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
