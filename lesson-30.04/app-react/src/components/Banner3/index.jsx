import React from 'react'
import styles from './index.module.scss'


const Banner3 = () => {
    return (

        <div id={styles["banner3-section"]}>
            <div className="container">
                <div className={styles["banner3-section"]}>
                    <div className={styles.text}>
                        <h4>Shoulder bags</h4>
                        <img src="../../../public/images/img1.png" alt="" />
                  
                    </div>
                    <div className={styles.text}>
                        <h4>Hand bag</h4>
                        <img src="../../../public/images/img2.png" alt="" />
                    </div>
                    <div className={styles.text}>
                        <h4>Backpack</h4>
                        <img src="../../../public/images/img3.png" alt="" />
                    </div>
                    <div className={styles.text}>
                        <h4>Evenings bags</h4>
                        <img src="../../../public/images/img4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3