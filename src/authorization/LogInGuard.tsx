import { Navigate, useNavigate } from 'react-router-dom';
import { useRootStore } from '../data/rootStore';
import { useEffect } from 'react';

export default function LogInGuard({ children }: LogInGuardProps) {
	const rootStore = useRootStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!rootStore?.authStore.isAuthenticated) {
			navigate('/login', { replace: true });
			// 'replace' will cause the navigation to replace the current entry in the history stack instead of adding a new one
		}
	}, [navigate, rootStore?.authStore.isAuthenticated]);
	// It is generally a good practice to include all variables and functions that are used inside the effect in the dependency array,
	// even if they are not expected to change, to avoid any potential bugs in the future,
	// that is why we have navigate and isAuthenticated as dependecnies, they are both used in the effect fucntion

	return children;

	// if (rootStore?.authStore.isAuthenticated) {
	// 	return children;
	// }
	// return <Navigate to="/login" />;
}

interface LogInGuardProps {
	children: JSX.Element;
}
