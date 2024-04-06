import React from 'react'
import styles from "./Detailcont.module.css"
import PropTypes from "prop-types";

const Detailcont = ({title,desc,type,image}) => {
if(type ==="imagedesc")
  return (
<>
<div className={styles.box}> 
<div className={styles.title}>{title}</div>
<div className={styles.desc}>{desc}</div>
</div>
</>
)
if(type ==="image")
  return (
<>
<img className={styles.img} src={image} alt="NILL"/>
</>
)
}

Detailcont.prototype= {
  title: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  type: PropTypes.string
};

export default Detailcont