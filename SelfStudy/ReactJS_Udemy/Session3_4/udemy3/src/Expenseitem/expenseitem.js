import React from 'react'
import './expenseitem.css'
function Expenseitem(){
    return(
        <div className="expense-item">
            <div>2nd Jan 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    )
}
export default Expenseitem;