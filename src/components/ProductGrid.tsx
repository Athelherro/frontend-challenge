import React from 'react';

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  status: 'on sale' | 'in stock';
  description: string;
}

interface ProductGridProps {
  products: Product[];
  onAdd: (id: number) => void;
  onDetails: (id: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAdd, onDetails }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div className="product-card__status">{product.status === 'on sale' ? 'ON SALE' : 'IN STOCK'}</div>
          <img src={product.image} alt={product.title} className="product-card__image" />
          <div className="product-card__title">{product.title}</div>
          <div className="product-card__prices">
            <span className="product-card__price">${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="product-card__old-price">${product.oldPrice.toFixed(2)}</span>}
          </div>
          <div className="product-card__desc">{product.description}</div>
          <div className="product-card__actions">
            <button onClick={() => onDetails(product.id)}>DETAILS</button>
            <button onClick={() => onAdd(product.id)}>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid; 