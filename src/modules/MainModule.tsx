import { useRoutes } from 'react-router-dom';
import { bookRoutes } from './main.routes';

function MainModule() {
	const element = useRoutes(bookRoutes); // element will contain information about the matched route, such as the matched route object, pathname, and any route parameters

	return element;
}

export default MainModule;
