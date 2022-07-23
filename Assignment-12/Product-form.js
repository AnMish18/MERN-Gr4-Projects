import React,{useState} from "react";
import './product-form.css'
export const ProductForm=(props)=>{
    const [formInput,setFormInput]=useState({
        productName:'',
        productPrice:'',
        productImage:''
    })
    const productNameHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productName:event.target.value
            }
        })
    }
    const productPriceHandler=(event)=>{
        setFormInput({
            ...formInput,
            productPrice:event.target.value
          });
   }
   const productImageHandler=(event)=>{
    setFormInput({
        ...formInput,
        productImage:event.target.value
      });
}

 
    const formSubmitHandler=(event)=>{
        let error='';
        if(formInput.productName=='' && error==''){
             alert('Please enter product name');
             console.log(error);
        }
        else if(formInput.productPrice=='' && error==''){
            alert('Please enter product price');
             console.log(error);
        }
        else{
        console.log(formInput);
         props.onProductAdded(formInput);   
        }
         event.preventDefault();
    // const formSubmitHandler=(event)=>{
    //     props.onProductDeleted(formInput);
    // }
    }
 return (
        
        <div className="form-container">
                <form onSubmit={formSubmitHandler}>
                <div className="form-input">
                    
                    <input type="text" placeholder="Enter product name" onChange={productNameHandler}></input>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Enter product price" onChange={productPriceHandler}></input>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Product image goes here" onChange={productImageHandler}></input>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <button className="btn_add_course">Add product</button>
                </div>
                {/* <div className="form-input">
                    <button className="btn_delete_course">Delete product</button>
                </div> */}
                <div className="clearfix"></div>
                </form>
        </div>
        
    )
}