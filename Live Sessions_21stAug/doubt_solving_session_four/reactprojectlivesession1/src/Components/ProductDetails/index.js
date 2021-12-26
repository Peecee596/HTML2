import React from 'react'
function ProductDetails(props)
{
    return(
        <div>
            <h1>ProductDetails</h1>
            <ul>
                <li>{props.product_name}</li>
                <li>{props.product_price}</li>
                <li>{props.product_qty}</li>
                <li>{props.product_id}</li>
            </ul>
        </div>
    );
}

export default ProductDetails;