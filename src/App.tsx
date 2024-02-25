import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import RootStore, { RootContext } from './data/rootStore';

const router = createBrowserRouter(routes);

const rootStore = new RootStore(router);

function App() {
	return (
		<RootContext.Provider value={rootStore}>
			{/* RouterProvider: All data router objects are passed to this component to render the app and enable the rest of the react-router APIs */}
			<RouterProvider router={router} />
		</RootContext.Provider>
	);
}

export default App;
