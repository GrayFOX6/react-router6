import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div>
			<h2>Page not found</h2>
			<Link to="/">Home (Link)</Link>
			<a href="/">Home (a)</a>
		</div>
	);
};

/*
Difference between <Link> and <a>:
<Link> will not cause full page reload, it prevents the browser from making a new HTTP request, it does routing on the client side using Javascript only
<a> tag will refresh the whole page
<Link> and <a> can both be used for navigation, but <Link> is specifically designed for use with React Router in single-page applications, 
providing a smoother and more efficient navigation experience by preventing full page reloads. 

Difference between <Link> and <Navigate>:
<Link> is used for declarative navigation, typically within JSX elements. 
Renders an anchor tag (<a>) under the hood and is primarily used for user-triggered navigation events, such as clicking on a link.
<Navigate> is used for programmatic navigation. It's a component that you include in your JSX and use to trigger navigation based on certain conditions or events within your component logic.
It's useful for scenarios where you need to navigate based on some internal state or in response to an asynchronous action. 
<Navigate> is used usually in class components, for function components it is recommended to use useNavigate hook.
*/
