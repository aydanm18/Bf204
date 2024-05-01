import React from 'react'
import ProductImage from '../ProductImage'
import styles from './index.module.scss'

const Banner = () => {
    return (
        <banner>
            <div id={styles["banner-section"]}>
                <div className="container">
                    <div className={styles["banner-section"]}>
                        <div className="row">
                            <div className="col-6" style={{paddingTop:'50px'}}>
                                <div className={styles["banner-left"]}>
                                    <h3>30% off</h3>
                                    <h1>Handbag products</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content expound the actual teachings of the great explorer</p>
                                    <button type='submit'>Shop now</button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={styles["banner-rigth"]}>
                                    <ProductImage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </banner>
    )
}

export default Banner