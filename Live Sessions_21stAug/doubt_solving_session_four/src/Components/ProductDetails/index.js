import React from 'react'

function ProductDetails(props) {
    console.log(props)
    return (
        <div>
            <h3>Product Details</h3>
            <p> The name of this product is {props.product_name} </p>
        </div>
    )
}
export default ProductDetails;
