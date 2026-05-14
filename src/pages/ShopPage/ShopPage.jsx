import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ShopPage.css';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Errore nel caricamento dei prodotti.");
        setLoading(false);
      });
  }, []);

  if (loading) return <main><p>Caricamento prodotti...</p></main>;
  if (error) return <main><p>{error}</p></main>;

  return (
    <main className="shop-page">
      <h1>Shop</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ShopPage;