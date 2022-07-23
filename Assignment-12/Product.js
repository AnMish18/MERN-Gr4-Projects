import './product.css';
export const Product=(props)=>{
  const {product_name,product_image,product_price} = props;
    return(
        <div className="prod">
            <div className="product_container">
                <div className="product_name">{product_name}</div>
                <div className="product_price"> {product_price}</div>
                <div className="product_image"><img src={product_image}/></div>
                
                <div className="button_container">
                   <button className="button">Buy Now</button>
                </div>
            </div>
        </div>
    )
}