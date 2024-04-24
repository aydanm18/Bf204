
import Proptypes from "prop-types"
import Card from "../card";

// import React from 'react'
const Cards = ({ products }) => {
    console.log(products);
    return (
        <ul>
            {
                products.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    )
}
Cards.proptypes = {
    products: Proptypes.array,
}
export default Cards