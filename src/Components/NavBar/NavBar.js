import styles from './NavBar.module.css';
import Logo from '../../Images/Logo.svg';


const NavBar = () => {

    var about = "<About/>"
    var skills = "<Skills/>"
    var projects = "<Projects/>"
    var contact = "<Contact/>"

    return(
        <nav className={styles.nav}>

            <img src={Logo} width="100px" height="100px" alt="Webpage logo"/>

            <div className={styles.listContainer}>
                <ul className={styles.ul}>
                    <li className={styles.li}>{about}</li>
                    <li className={styles.li}>{skills}</li>
                    <li className={styles.li}>{projects}</li>
                    <li className={styles.li}>{contact}</li>
                </ul>

                <button className={styles.button}>Resume</button>
            </div>
            
        </nav>
    )
}

export default NavBar;