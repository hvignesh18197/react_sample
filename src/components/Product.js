import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

export default function Product() {
  const [product, setProduct] = useState({});
  const params = useParams()

  useEffect(async () => {
    try {
      const response = await ProductService.getProduct(params.productId);
      if (response.status == 200) {
          console.log(response)
        setProduct(response.data.data.product[0]);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.shortdesc}</p>
        <div dangerouslySetInnerHTML={{ __html: product.longdesc }}></div>
    </div>
  );
}
