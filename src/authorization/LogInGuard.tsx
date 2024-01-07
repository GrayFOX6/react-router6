import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { useRootStore } from '../data/rootStore';

export default function LogInGuard({ children }: LogInGuardProps) {
	const rootStore = useRootStore();

	if (rootStore?.authStore.isAuthenticated) {
		return children;
	}

	return <Navigate to="/login" />;
}

interface LogInGuardProps {
	children: JSX.Element;
}
