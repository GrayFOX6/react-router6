import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public.routes';

function PublicModule() {
	const element = useRoutes(publicRoutes); // element will contain information about the matched route, such as the matched route object, pathname, and any route parameters

	return element;
}

export default PublicModule;
