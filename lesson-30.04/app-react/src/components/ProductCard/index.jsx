import React from 'react'

import { FaStar } from "react-icons/fa6";
import styles from './index.module.scss'


const ProductCard = ({ product }) => {
    return (
        <div className="col-4" >
            <div style={{ backgroundColor: "#F9F9F9" , minHeight:"508px" ,width:"360px" }} className="card">
                <img src={product.imgUrl} className="card-img-top" alt="..." style={{height:'243px',width:'218px'}}/>
                <div className="card-body">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <h5 className="card-title">{product.title}</h5>
                    <h4 style={{ color: "red" }} className="card-text">
                        ${product.price}
                    </h4>
                    <button style={{ textAlign: "center" }} type="button" class="btn btn-outline-dark">Add to Card</button>
                </div>
            </div>
        </div>

    )
}

export default ProductCard