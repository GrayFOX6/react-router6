import '../css/styles.css';
import { NavLink, Outlet } from 'react-router-dom';
import ProductList from './ProductList';
import { products } from '../data/Products';

export const Products = () => {
	return (
		<div>
			<h2>Products</h2>
			<input type="search" placeholder="Search products..."></input>
			{products && <ProductList products={products} />}
			<nav
				style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}
			>
				<NavLink
					to="featured"
					className={({ isActive }) => {
						return isActive ? 'navlink' : '';
					}}
				>
					Featured
				</NavLink>
				<NavLink
					to="new"
					className={({ isActive }) => {
						return isActive ? 'navlink' : '';
					}}
				>
					New
				</NavLink>
				{/* 
					<Link> and <NavLink> are used for navigation in React Router applications, 
					but <NavLink> provides additional features for styling and managing active routes. 
					Use <Link> for basic navigation needs, and <NavLink> when you need more control over styling active links or managing active routes.
					Link and NavLink inherit parent route and append backslash to the 'to' route (relative link)
					In our example it append '/featured' or '/new' to the parent route, which is 'products'
					If we add backslash, it will recognize the route as an absoulte path and will not append it to the parent route (absolute link)
					For example, to="/featured" will navigate to http://localhost:3000/featured, not http://localhost:3000/products/featured
				*/}
			</nav>
			{/* Outlet is used for rendering children component */}
			<Outlet />
		</div>
	);
};

/*
Difference between <Link> and <Navlink>:
<Link> and <NavLink> are used for navigation in React Router applications, but <NavLink> provides additional features for styling and managing active routes.
The <NavLink> component is an extension of <Link> with additional features, primarily for styling and active route management.
It automatically applies an "active" class to the link corresponding to the current route, making it easy to style the active link differently.
Use <Link> for basic navigation needs, and <NavLink> when you need more control over styling active links or managing active routes.
*/
