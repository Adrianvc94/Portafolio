import styles from "./NavBar.module.css";

import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
  return (
    <nav className={styles.desktop_nav}>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
