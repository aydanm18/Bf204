import React from 'react'
import styles from './index.module.scss'
import { MdPayment } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { CiSaveDown2 } from "react-icons/ci";

const Banner2 = () => {
    return (
        <banner2>
            <div id={styles["banner-section2"]}>
                <div className="container">
                    <div className={styles["banner-section2"]}>
                        <ul>
                            <li><FaCarSide style={{ color: '#206363', fontSize: 30 }} /> Guaranteed delivery</li>
                            <li><CiSaveDown2 style={{ color: '#206363', fontSize: 30 }} />Do not come back</li>
                            <li><GrSecure style={{ color: '#206363', fontSize: 30 }} />Safe and secure shopping</li>
                            <li><MdPayment style={{ color: '#206363', fontSize: 30 }} />Payment at the door or online</li>
                        </ul>
                    </div>
                </div>
            </div>
        </banner2>
    )
}

export default Banner2