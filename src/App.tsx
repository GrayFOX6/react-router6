import React from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { routes } from './routes/routes';
import RootStore, { RootContext } from './data/rootStore';
import Login from './components/Login';
import { NotFound } from './components/NotFound';
import { Products } from './components/Products';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Product } from './components/Product';

//const router = createBrowserRouter(routes);
const router = createBrowserRouter([
	{
		//path: '/',
		index: true,
		element: <Navigate to="/login" />,
		errorElement: <NotFound />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/products',
		element: <Products />,
		children: [
			// When we go to the children route, parent (<Products>) will always be visible
			// That way we dont lose Product context like we would in case '/products/:id'
			// Every time we have children, we need to have Outlet in parent component (Products) in order to render child component
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
]);

const rootStore = new RootStore(router);

// RouterProvider:
// All data router objects are passed to this component to render the app and enable the rest of the react-router APIs
function App() {
	return (
		<RootContext.Provider value={rootStore}>
			{/* <Navbar /> */}
			<RouterProvider router={router} />
		</RootContext.Provider>
	);
}

export default App;
