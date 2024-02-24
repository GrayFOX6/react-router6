import { Outlet, useSearchParams } from 'react-router-dom';

export const Users = () => {
	const [searchParams, setSearchParams] = useSearchParams(); // Similar to useState, the useSearchParams returns an object and function to set the object
	const showActiveUsers = searchParams.get('active') === 'true';

	return (
		<div>
			<ul>
				{users.map((user) => {
					return (
						<li>
							{user.name}
							{user.isAdmin ? ' (admin)' : ''}
						</li>
					);
				})}
			</ul>
			<button onClick={() => setSearchParams({ active: 'true' })}>
				Show active users
			</button>
			<button onClick={() => setSearchParams({})}>Reset</button>
			{showActiveUsers ? <div>Active users</div> : <div>All users</div>}
			<Outlet />
		</div>
	);
};

const users: User[] = [
	{
		id: 1,
		name: 'Vladimir',
		isAdmin: true,
		isActive: true,
	},
	{
		id: 2,
		name: 'Gabrijela',
		isAdmin: true,
		isActive: true,
	},
	{
		id: 3,
		name: 'Bubi',
		isAdmin: false,
		isActive: true,
	},
	{
		id: 4,
		name: 'BubiBubi',
		isAdmin: false,
		isActive: false,
	},
];

interface User {
	id: number;
	name: string;
	isAdmin: boolean;
	isActive: boolean;
}
