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
				<PublicModule />
			</React.Suspense>
		),
		path: '/*', // Root path
	},
	{
		element: (
			<React.Suspense fallback={<PageLoader />}>
				<LogInGuard>
					<MainModule />
				</LogInGuard>
			</React.Suspense>
		),
		path: 'app/*',
	},
];

export { routes };
