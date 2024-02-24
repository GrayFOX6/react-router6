import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate(); // returns a navigate function

	return (
		<>
			<h2>Home</h2>
			<button onClick={() => navigate('order-summary', { replace: true })}>
				{/* 
					When you navigate to a new route without using replace, the new route is added to the history stack. 
					This means that if the user clicks the browser's back button, they will go back to the previous route.
					On the other hand, if you use replace: true, the new route will replace the current entry in the history stack. 
					This can be useful in scenarios where you don't want the user to navigate back to the previous route.
					It's often used in situations like form submissions or modal dialogs where going back to the previous state might not make sense.
				*/}
				Place Order
			</button>
		</>
	);
};
