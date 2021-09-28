import styles from "./NavBar.module.css";
import Menu from "../../Images/menu_icon.png";

import NavLinks from "./NavLinks";
import { useState } from "react";

const MobileNavigation = () => {

    const [menu, SetMenu] = useState(false);

  return (
    <nav className={styles.mobile_nav}>
      <img
        alt="Hamburger menu"
        src={Menu}
        className={styles.menu_icon}
        onClick={() => SetMenu(!menu)}
      />
      {/* <span> Poner como background la imagen del hambuerger menu</span> */}
      {menu && <NavLinks/>}
    </nav>
  );
};

export default MobileNavigation;
