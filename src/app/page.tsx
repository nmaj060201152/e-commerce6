export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: '10px 0' }}>
            <a
              href={`/product/${product.id}`}
              style={{
                textDecoration: 'none',
                color: 'blue',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="https://via.placeholder.com/50"
                alt={product.title}
                style={{ marginRight: '10px', borderRadius: '5px' }}
              />
              {product.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
