import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const SkeletonCard = () => {
    const arr = Array.from({ length: 3 });
    return (
        <div className='row'>

            {arr.map((q, i) => {
                return <div className='col-4'>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </div>
            })}

        </div>
    )
}

export default SkeletonCard;