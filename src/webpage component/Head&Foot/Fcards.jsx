import React from 'react'
import styles from "./Fcards.module.css"

const Fcards  = () => {
  return (
    <> 
    <div className={styles.cnt}>
      <div className={styles.inner}>
      <div className={styles.pc}>
      <div className={styles.des}>Ready to get started? Sign up now!</div>
      <form class="d-flex">
        <input class="form-control me-2" className={styles.int}type="email" placeholder="E-MAIL" aria-label="Search"/>
        <button class="btn btn-primary" className={styles.btn}type="submit">SUBMIT</button>
      </form>
    </div>
    </div>
    </div>
    </>
  )
}
export default Fcards


