import { Component } from 'react'
import ProductDetails from '../ProductDetails';
class ProductInfo extends Component{

		constructor(props){
				super(props);	
				this.state = {
					product_name:'Iphone6',
					product_price:50000,
					product_qty:100
				}
            // if you use arrow functions in your component,
            // no need to bind it with the class constructor.
           //this.updateData = this.updateData.bind(this)
		}

        updateData = () =>{

                this.setState({ product_name:'Iphone12'})


        }
		render(){

			return(
                <div>
				        <h1> Products Info </h1> 
                        <ul>
                            <li>{this.state.product_name}</li> 
                            <li>{this.state.product_price}</li>
                            <li>{this.state.product_qty}</li>
                        </ul>
                        <ProductDetails product_name={this.state.product_name} />
                        <button onClick={this.updateData}> Update Data </button>
                </div>
				)

			}
}
export default ProductInfo;