import React from 'react'
import styles from "./Iconncard.module.css"
import PropTypes from "prop-types";

const Iconncard = ({title,icon,desc,type}) => {
  // CONDITIONAL RENDERING
  if(type ==="icondesign")
  return (
    <>
    
    <div className={styles.cards}>
    <i className={`${icon} ${styles.icons}`}></i>
    <div className={styles.title}>{title}</div>
    <div className={styles.desc}>{desc}</div>
    </div>
    </>
  )
  
}
Iconncard.prototype= {
  title: PropTypes.string,
  icon: PropTypes.string,
  desc: PropTypes.string,
  type: PropTypes.string
};



export default Iconncard