import { Link, NavLink } from 'react-router-dom';

// NavLink adds 'active' className to the <a> tag ov the <nav>, meaning we can style the current active NavLink route
// NavLink is specifically built for navigaton bars, breadcrumbs or tabs where we want to highlight the current route
// Link on other hand does not provide 'active' className and should be used if we just want to navigate to some route

function Navbar() {
	return (
		<nav>
			{/* 
			<Link to="/">Home</Link>
			<Link to="/about">About</Link> 
			*/}
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>
	);
}

export default Navbar;
