export default async function ProductPage({ params }) {
    const { id } = params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>{product.title}</h1>
        <img
          src="https://via.placeholder.com/150"
          alt={product.title}
          style={{ borderRadius: '10px', marginBottom: '20px' }}
        />
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    );
  }
  