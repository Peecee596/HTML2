import React from "react";
import './Product.css'

function Product({id,title,image,price,rating}){
    return(
        <div className="product">
            <div className="product__info">
                {/* <p>The Lean Startup</p> */}
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    {/* <strong>19.99</strong> */}
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {/* <p>🌟</p> */}
                    {Array(rating).fill().map((_,id)=>
                    (<p>🌟</p>))}
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt=''/>
            <button>Add to Basket</button>
        </div>
    );
}
export default Product;