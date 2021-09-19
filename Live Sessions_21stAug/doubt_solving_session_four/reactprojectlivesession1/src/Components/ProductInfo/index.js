import React,{Component} from 'react'
import ProductDetails from '../ProductDetails';
class ProductInfo extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            product_name:'Iphone6',
            product_price:50000,
            product_qty:45,
            product_id:1
        }
    }
    updatedetails = () =>{
        this.setState({
            product_name:'Iphone12',
            product_price:70000,
            product_qty:50,
            product_id:2
        })
        
    }

    render(){
        return(
            <div>
                <h1>Product name:{this.state.product_name}</h1>
                <h2>Product Price:{this.state.product_price}</h2>
                <h3>Qty Ordered:{this.state.product_qty}</h3>
                <h4>Product Id:{this.state.product_id}</h4>
            
                <ProductDetails 
                    product_name={this.state.product_name} 
                    product_qty={this.state.product_qty} 
                    product_price={this.state.product_price}
                    product_id={this.state.product_id}/>
                
                <button onClick={this.updatedetails}>Update Data</button>
            </div>
        );
    }
   
}
export default ProductInfo;