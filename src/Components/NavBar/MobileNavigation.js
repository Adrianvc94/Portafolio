import styles from "./NavBar.module.css";
import Menu from "../../Images/menu_icon.png";

import NavLinks from "./NavLinks";
import { useState } from "react";

const MobileNavigation = () => {
  const [menu, SetMenu] = useState(false);

  if (menu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const changeMenu = () => {
    SetMenu(false);
  };

  return (
    <nav className={styles.mobile_nav}>
      <img
        alt="Hamburger menu"
        src={Menu}
        className={styles.menu_icon}
        onClick={() => SetMenu(!menu)}
      />
      {menu && <NavLinks onChangeMenu={changeMenu} />}
    </nav>
  );
};

export default MobileNavigation;
