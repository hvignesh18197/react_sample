import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const response = await ProductService.getProducts();
      if (response.status == 200) {
        setProducts(response.data.data.products);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {products.map((product) => (
        <>
          <Link to={`/product/${product.id}`}>
            <h1>{product.title}</h1>
            <p>{product.user.name}</p>
            {product.image.length ? <img src={product.image[0].url} /> : null}
            <hr></hr>
          </Link>
        </>
      ))}
    </div>
  );
}
