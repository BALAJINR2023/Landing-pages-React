import React from 'react'
import styles from "./Navbar.module.css"
import navlogo from "../../assets/navlogo.svg"
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light mx-5" >
    <img src={navlogo} width="30" height="30" alt=""/>
    <a className={styles.nav} href="https://startbootstrap.com/theme/landing-page" target="_blank">START BOOTSTRAP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="d-flex justify-content-end">
            <button class="btn btn-outline-primary" type="submit">SIGN UP</button>
    </form>
    </div>
    </nav>
    </>
  )
}

export default Navbar