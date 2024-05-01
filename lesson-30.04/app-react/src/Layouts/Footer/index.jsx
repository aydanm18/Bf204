import React from 'react'
import styles from './index.module.scss'
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div id={styles["footer-top"]}>
        <div className="container">
          <div className={styles["footer-top"]}>
            <h1>Snobella</h1>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Search all product"
                name=""
                id=""
              />
              <CiSearch className={styles["search-icon"]} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id={styles["footer-middle"]}>
        <div className="container">
          <div className={styles["footer-middle"]}>
            <div className={styles["footer-contact"]}>
              <p>The wise man therefore always holds selectionThe wise man therefore always rejects pleasures to secure other greater</p>
              <a href="emailto:Snobella@gmail.com">
                <MdOutlineEmail />
                Snobella@gmail.com
              </a>
              <br /><br />
              <a href="tel:+748 383 23 14">
                <FaPhoneAlt />
                +748 383 23 14 
              </a>
              <br /><br />
              <button>
                <FiSend />
                Send Mesagge
              </button>
            </div>

          
          <div className={styles["footer-shop"]}>
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Shoulder Bag</a></li>
              <li><a href="#">Backpack</a></li>
              <li><a href="#">Tote Bag</a></li>
              <li><a href="#">Hand Bag</a></li>
              <li><a href="#">Evening bags</a></li>
              <li><a href="#">Purse</a></li>
            </ul>
          </div>
          <div className={styles["footer-company"]}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Customer service</a></li>

            </ul>
          </div>
          <div className={styles["footer-help"]}>
            <h4>Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Cancellation of <br /> the ordere</a></li>
              <li><a href="#">Don't go back</a></li>

            </ul>
          </div>
        </div>
      </div>
      </div>
      <div id={styles["footer-bottom"]}>
        <div className="container">
        <div className={styles["footer-bottom"]}>
        <p>© 2020. All rights reserved.</p>
        <ul>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><SlSocialFacebook /></a></li>
          <li><a href="#"><FaWhatsapp /></a></li>
        </ul>
        </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer