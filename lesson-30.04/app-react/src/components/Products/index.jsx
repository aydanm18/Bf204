import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAllData } from '../../servives';
import ProductCard from '../ProductCard';

const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllData().then((response) => {
            setData(response);
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {
                data && data.map((product) => {
                    return <ProductCard product={product} key={product.id}/>
                }
                )
            }
        </div>
    )
}

export default Products