import {useState} from 'react';
import './App.css';
import {ProductForm} from './components/product-form/Product-form'
import {Product} from './components/product-form/product/Product'
function App() {
  const [products,setProducts]=useState([
    {
      product_name:"leaf headphones",
      product_price:"$10",
      product_image:"http://cdn.shopify.com/s/files/1/1676/7297/products/Main-Image_grande.jpg?v=1613022858"
    },
    {
      product_name:"zebronics",
      product_price:"$15",
      product_image:"https://m.media-amazon.com/images/I/61vvmibZy8L._SL1500_.jpg"
    }
  ]);
  const addnewProductHandler=(product)=>{
    console.log('Added Products');
     const productObj={
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage
     }
     setProducts([...products,productObj]);
  }
  // const deleteProductHandler=(product)=>()=>{
  //   setProducts((products)=>products.filter((_,i)=>i!==product));
  // }
  return (
    <div className="App">
     
      <h4 >List Of Products</h4>
      <ProductForm onProductAdded={addnewProductHandler}/> 
      {/* <ProductForm onProductDeleted={deleteProductHandler}/> */}
      <h4>Proceed with the following products</h4>
      {products.map((ele)=>{
      return   <Product key={ele} {...ele}/>
    })}
    </div>
  );
}

export default App;