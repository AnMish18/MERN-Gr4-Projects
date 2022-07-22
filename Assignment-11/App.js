import logo from './logo.svg';
import './App.css';
import {Product} from './Components/Product';
function App() {
  const product_arr=[
    {
      product_name:"Wii",
      product_image:"https://i.gadgets360cdn.com/products/large/1549530284_635_nintendo_wii_db.jpg?downsize=*:360",
      product_price:"₹16990"
    },
    {
      product_name:"PS5",
      product_image:"https://images.indianexpress.com/2021/02/PS5-FB-1.jpg",
      product_price:"₹68990"
    },
    {
      product_name:"Redgear GC",
      product_image:"https://i0.wp.com/m.media-amazon.com/images/S/aplus-media-library-service-media/a9bac2a2-7619-432d-ae37-3e0e36164f0f.__CR0,0,970,600_PT0_SX970_V1___.jpg?w=696&ssl=1",
      product_price:"₹1599"
    }
  ]
  return (
    <div className="App">
    <h1>Products:</h1>
    {product_arr.map((ele)=>{
      return   <Product key={ele} {...ele}/>
    })}

    </div>
  );
}

export default App;
