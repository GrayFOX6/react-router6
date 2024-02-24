import { RouteObject } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import React from 'react';
import LogInGuard from '../authorization/LogInGuard';

const PublicModule = React.lazy(() => import('../modules/PublicModule'));
const MainModule = React.lazy(() => import('../modules/MainModule'));

const routes: RouteObject[] = [
	{
		element: (
			<React.Suspense fallback={<PageLoader />}>
				<LogInGuard>
					<PublicModule />
				</LogInGuard>
			</React.Suspense>
		),
		path: '/*', // Root path
		errorElement: <div>errorElement in PublicModule</div>,
	},
	{
		element: (
			// <React.Suspense fallback={<PageLoader />}>
			// 	<MainModule />
			// </React.Suspense>
			<MainModule />
		),
		path: 'app/*',
	},
];

export { routes };
