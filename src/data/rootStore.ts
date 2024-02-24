import { createContext, useContext } from 'react';
import AuthStore from '../authorization/AuthStore';

class RootStore {
	authStore: AuthStore;

	constructor(router: any) {
		this.authStore = new AuthStore(router);
	}
}

export default RootStore;

const RootContext = createContext<RootStore | null>(null);

const useRootStore = () => {
	return useContext(RootContext);
};

export { RootContext, useRootStore };
