import { NavLink, Outlet } from 'react-router-dom';

export const Products = () => {
	return (
		<div>
			<h2>Products</h2>
			<input type="search" placeholder="Search products..."></input>
			<nav>
				<NavLink to="featured">Featured</NavLink>
				<NavLink to="new">New</NavLink>
				{/* 
					Link and NavLink inherit parent route and append backslash to the 'to' route (relative link)
					In our example it append '/featured' or '/new' to the parent route, which is 'products'
					If we add backslash, it will recognize the route as an absoulte path and will not append it to the parent route (absolute link)
					For example, to="/featured" will navigate to http://localhost:3000/featured, not http://localhost:3000/products/featured
				*/}
			</nav>
			<Outlet />
		</div>
	);
};
