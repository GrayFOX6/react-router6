import { makeObservable, observable } from 'mobx';

export interface User {
	[key: string]: any;
}

class AuthStore {
	user: User | null = null;

	get isAuthenticated() {
		return this.user !== null;
	}

	constructor(router: any) {
		makeObservable(this, {
			user: observable,
		});
	}

	login(user: User | null) {
		this.user = user;
	}

	logOut() {
		this.user = null;
	}
}

export default AuthStore;
