import styles from "./NavBar.module.css";
import cv from "../../AdrianVinicioCV.pdf";

const NavLinks = (props) => {
  var about = "<About/>";
  var skills = "<Skills/>";
  var projects = "<Projects/>";
  var contact = "<Contact/>";

  return (
    <div className={styles.listContainer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a onClick={props.onChangeMenu} href="#about">
            {about}
          </a>
        </li>
        <li className={styles.li}>
          <a onClick={props.onChangeMenu} href="#skills">
            {skills}
          </a>
        </li>
        <li className={styles.li}>
          <a onClick={props.onChangeMenu} href="#projects">
            {projects}
          </a>
        </li>
        <li className={styles.li}>
          <a onClick={props.onChangeMenu} href="#contact">
            {contact}
          </a>
        </li>
      </ul>

      <a href={cv} download="AdrianVinicioCV" target = "_blank" rel="noopener noreferrer"  className={styles.button}>Resume</a>
    </div>
  );
};

export default NavLinks;
