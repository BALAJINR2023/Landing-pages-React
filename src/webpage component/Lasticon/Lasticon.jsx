import React from 'react'
import styles from "./Lasticon.module.css"

const Lasticon = () => {
  return (
    <>
    <div>
    <ul className={styles.list}>
    <div className={styles.li}>
     <a href="#!">About</a>
     <li><a href="#!">Contact</a> </li>
     <li><a href="#!">Term of Use</a></li>
     <li><a href="#!">Privacy Policy</a></li>
    </div>
    <div className={styles.desc}>© Your Website 2023. All Rights Reserved.
    </div>
    <div className={styles.card1}>
    <div><i class="bi-facebook fs-3"></i></div>
    <div><i class="bi-twitter fs-3"></i></div>
    <div><i class="bi-instagram fs-3"></i></div>
    </div>
    </ul>
    </div>
    </>
  )
}

export default Lasticon