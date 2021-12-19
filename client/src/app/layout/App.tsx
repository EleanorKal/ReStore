// Where the name element value is the same, to enforce uniqueness you can specify a further parameter
// aside from the key unique identifier as follows where the index parameter has been added
// with the key parameters wrapped inside parentheses.
// {products.map((item, index) =>

// Within the ordered list, li - you can now wrap both key parameters in parenthese and reference them.
// the App function below uses React hook to main persistence via "useState"

// with the useEffect react hook we want the UI to do something as a result of a specified event
// here we specify the callback function which responds with fetching json data from the api/Products
// then updating our database with the new data. In order words - the useEffect shown here re-renders the UI

// Important!!!!
// as the array specified here [] is empty, this means that the dependency will only be called once.
// this is one-time specification is important, otherwise the useEffect will run infinitely or until 
// the program runs out of allocated memory space.

// the elipses is known as a 'spread operator' which indicates that a range will be declared


import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []) 


  function addProduct() {   
    setProducts(prevState => [...prevState,  
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1), 
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'some description',
      pictureUrl: 'http://picsum.photos/200'
    } ])

  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map(product => (
          <li key={(product.id)}>{product.name}- {product.price}</li>

        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;