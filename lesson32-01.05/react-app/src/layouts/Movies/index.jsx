import React, { useEffect, useState } from 'react'
import SkeletonCard from './SkeletonCard'
import { getAllData } from '../../services'
import AllCards from '../AllCards'

const Movies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllData().then((response) => {
            setData(response);
        }).catch((err) => {
            console.log(err)
        }).finally(()=>{
            setLoading(false);
        })
    }, [])


    
    return (
     
       <div>
        {loading ? <SkeletonCard/> : <AllCards data={data}/>}
       </div>
    )
}

export default Movies