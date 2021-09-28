import styles from './NavBar.module.css';
// import Logo from '../../Images/Logo.svg';

import NavLinks from './NavLinks';

const DesktopNavigation = () => {

  

    return(
        <nav className={styles.desktop_nav}>


           <NavLinks/>
            
        </nav>
    )
}

export default DesktopNavigation;