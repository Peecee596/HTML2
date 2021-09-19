import React from 'react'
import GeneralNews from '../Components/GeneralNews'
import ProductInfo from '../Components/ProductInfo'

export default function DashboardContainer() {
    return (
        <React.Fragment>
            <ProductInfo />
            <GeneralNews />
    </React.Fragment>
    )
}
