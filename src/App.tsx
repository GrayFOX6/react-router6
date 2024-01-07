import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import RootStore, { RootContext } from './data/rootStore';
import { Home } from './pages/Home';
//import About from './pages/About';
import Navbar from './pages/Navbar';
import OrderSummary from './pages/OrderSummary';
import { NotFound } from './pages/NotFound';
import { Products } from './pages/Products';
import { NewProducts } from './pages/NewProducts';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { Users } from './pages/Users';
import { UserDetail } from './pages/UserDetail';
import { Admin } from './pages/Admin';
import { Profile } from './pages/Profile';
import Login from './pages/Login';

const LazyAbout = React.lazy(() => import('./pages/About')); // For dynamic imports we need to have default export, named export wont work

//const router = createBrowserRouter(routes);
const router = createBrowserRouter([
	{
		index: true, // matches http://localhost:3000
		element: <Home />,
	},
	{
		path: '/about',
		element: (
			<React.Suspense fallback={<div>Loading...</div>}>
				<LazyAbout />,
			</React.Suspense>
		),
	},
	{
		path: '/order-summary',
		element: <OrderSummary />,
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
]);

const rootStore = new RootStore();

function App() {
	return (
		<RootContext.Provider value={rootStore}>
			{/* <Navbar /> */}
			<RouterProvider router={router} />
		</RootContext.Provider>
	);
}

export default App;
