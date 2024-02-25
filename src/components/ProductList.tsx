import { Link } from 'react-router-dom';
import { Product } from '../data/Products';

export interface ProductListProps {
	products: Product[];
}

function ProductList({ products }: ProductListProps) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{products.map((product) => {
				return (
					<Link key={product.id} to={`/app/products/${product.id}`}>
						{product.name}
					</Link>
				);
			})}
		</div>
	);
}

export default ProductList;
