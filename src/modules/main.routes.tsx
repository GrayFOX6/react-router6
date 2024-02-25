import React from 'react';
import { RouteObject } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { Home } from '../components/Home';
import { Products } from '../components/Products';
import { NewProducts } from '../components/NewProducts';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Users } from '../components/Users';
import { UserDetail } from '../components/UserDetail';
import { Admin } from '../components/Admin';
import { Profile } from '../components/Profile';
import { Product } from '../components/Product';
import OrderSummary from '../components/OrderSummary';

export const bookRoutes: RouteObject[] = [
	{
		index: true, // matches http://localhost:3000/app
		element: <Home />,
		errorElement: <div>errorElement in Home</div>,
	},
	{
		path: '/order-summary',
		element: <OrderSummary />,
		errorElement: <div>errorElement in OrderSummary</div>,
	},
	{
		path: '/products',
		element: <Products />,
		children: [
			// When we go to the children route, parent (<Products>) will always be visible
			// That way we dont lose Product context like we would in case '/products/:id'
			// Every time we have children, we need to have Outlet in parent component (<Products>) in order to render child component
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
				index: true, // The path will still be as the parent route (/products), but it will show the indexed element (<FeaturedProducts>) in the <Outlet>
				element: <FeaturedProducts />,
			},
			{
				path: '/products/:id',
				element: <Product />,
			},
		],
	},
	{
		// This will never hit since react-router goes from top to bottom and will go to the first matched route. After the match, it wont go down anymore
		path: '/products/:id',
		element: <Product />,
	},
	{
		path: '/order-summary',
		element: <OrderSummary />,
	},
	{
		path: '/users',
		element: <Users />,
		children: [
			// Every time we have children, we need to have Outlet in parent component (Users)
			{
				path: '/users/:userId', // id can be any name, and number or string type
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
		path: '/*',
		element: <NotFound />,
	},
];
