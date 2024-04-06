import React from 'react'
import styles from "./Iconnig.module.css"
import PropTypes from "prop-types";

const Iconnig = ({title,icon,desc,type}) => {

if(type ==="iconig")
  return (
    <>
    <div className={styles.cards}>
    <img className={styles.icon} src={icon} alt="..."/>
    <div className={styles.title}>{title}</div>
    <div className={styles.desc}>{desc}</div>
    </div>
    </>
  )
  
}
Iconnig.prototype= {
  title: PropTypes.string,
  icon: PropTypes.string,
  desc: PropTypes.string,
  type: PropTypes.string
};
export default Iconnig