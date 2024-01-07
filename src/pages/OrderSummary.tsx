import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
	const navigate = useNavigate();
	return (
		<>
			<h2>Order confirmed!</h2>
			<button onClick={() => navigate('/')}>Back</button>
			{/* 
				<button onClick={() => navigate(-1)}>Back</button> 
				-1 will navigate to previous route
			*/}
		</>
	);
};

export default OrderSummary;
