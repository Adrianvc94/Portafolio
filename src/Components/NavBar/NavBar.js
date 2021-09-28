import styles from "./NavBar.module.css";
import Logo from "../../Images/Logo.svg";

import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <img src={Logo} className={styles.logo} alt="Webpage logo" />

      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  );
};

export default NavBar;
