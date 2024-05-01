import React from 'react'

import { FaStar } from "react-icons/fa6";
import styles from './index.module.scss'


const ProductCard = ({ product }) => {
    return (
        <div  id="cards" className='row'>
            <div style={{backgroundColor: "#F9F9F9" ,width: '18rem' }}  className="card">
                <img src={product.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                <FaStar style={{color: "yellow" }}  />
                <FaStar style={{color: "yellow" }}  />
                <FaStar style={{color: "yellow" }}  />
                <FaStar style={{color: "yellow" }}  />
                <FaStar style={{color: "yellow" }}  />
                    <h5 className="card-title">{product.title}</h5>
                    <h4 style={{color: "red" }} className="card-text">
                        ${product.price}
                    </h4>
                    <button style={{textAlign:"center"}} type="button" class="btn btn-outline-dark">Add to Card</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard