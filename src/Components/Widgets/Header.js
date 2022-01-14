import React, { useEffect,useState } from "react"
import {Navbar,Nav,Container, Image} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import styles from "../Styles/Widget.module.css"
import Logo from "../../Assets/Images/logo.png"
import {AiOutlineUser} from "react-icons/ai"
import {FaSignInAlt} from "react-icons/fa"
const Header = () => {
    const [isScrolling,setIsScrolling] = useState()

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.onscroll = () => {
          let currentScrollPos = window.pageYOffset;
        //   let maxScroll = document.body.scrollHeight - window.innerHeight;
          if (currentScrollPos > 10 ) { //&& currentScrollPos < maxScroll
            setIsScrolling(styles.visible)
          } else {
            setIsScrolling('')
          }
        }
      }
    })
    
    return(
        <>
        <header className={`${styles.header} ${styles.lazy__load} ${isScrolling}`}>
            <Navbar>
                <Container>
                <Navbar.Brand><Image src={Logo} alt="Parabolics"/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className={styles.nav__wrapper}>
                      <NavLink to="/" className={({ isActive }) => `${styles.nav__menu}` + (isActive ? ` ${styles.active__nav__menu}` : "")}>Home</NavLink>
                      <NavLink to="/pricing" className={({ isActive }) => `${styles.nav__menu}` + (isActive ? ` ${styles.active__nav__menu}` : "")}>Pricing</NavLink>
                        <div className={styles.button__wrapper}>
                            <button className={styles.header__buttons}>Login <span className={styles.header__icons}><AiOutlineUser/></span></button>
                            <button className={styles.header__buttons}>Signin <span className={styles.header__icons}><FaSignInAlt/></span></button>
                        </div>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        </header>
        </>
    )
}
export default Header;