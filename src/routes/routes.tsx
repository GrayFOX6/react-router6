import { RouteObject } from 'react-router-dom';
import PageLoader from '../pages/PageLoader';
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
	},
	{
		element: (
			<React.Suspense fallback={<PageLoader />}>
				<MainModule />
			</React.Suspense>
		),
		path: 'app/*',
	},
];

export { routes };
