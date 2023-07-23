import styles from './Navbar.module.css'
import logo from '../imgs/logo.svg'

const Navbar = () => {
    
    return <>
        <div className={styles.navbar}>
            <img src={logo} className={styles.img}></img>
        </div>
    </>
}

export default Navbar;