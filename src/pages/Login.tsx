import { useState } from 'react';
import { useRootStore } from '../data/rootStore';
import { User } from '../authorization/AuthStore';

const Login = () => {
	const [user, setUser] = useState<User | null>(null);
	const rootStore = useRootStore();

	const handleLogIn = () => {
		rootStore?.authStore.login(user);
	};

	return (
		<div>
			<label>
				Username:
				<input
					type="text"
					onChange={(e) => setUser({ name: e.target.value })}
				/>
			</label>
			<button onClick={handleLogIn}>Log In</button>
		</div>
	);
};

export default Login;
