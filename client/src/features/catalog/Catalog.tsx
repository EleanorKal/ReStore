// in React the interface method adds functions to the props
// the interface method specifies that the properties from the Product app component
// are required to be passed to the interface component
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
  

    return (
        <>
            <ProductList products={products} />
        </>
    )
}