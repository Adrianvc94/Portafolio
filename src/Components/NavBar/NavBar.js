import styles from "./NavBar.module.css";
import Logo from "../../Images/Logo.svg";

import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const NavBar = () => {

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <nav className={styles.NavBar} id="navbar">
      <img src={Logo} className={styles.logo} alt="Webpage logo" onClick={() => window.scrollTo(0, 0)}/>

      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  );
};

export default NavBar;
