import { useParams } from 'react-router-dom';

export const Product = () => {
	const params = useParams<{ id: string }>(); // Type scripting useParams is not needed, it only helps to know proper parameter type is using TS

	console.log('params from <Product>: ', params);

	return <div>Product {params.id}</div>;
};
