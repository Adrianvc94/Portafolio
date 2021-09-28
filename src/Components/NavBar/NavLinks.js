import styles from "./NavBar.module.css";

const NavLinks = () => {
  var about = "<About/>";
  var skills = "<Skills/>";
  var projects = "<Projects/>";
  var contact = "<Contact/>";

  return (
    <div className={styles.listContainer}>
      <ul className={styles.ul}>
        <li className={styles.li}>{about}</li>
        <li className={styles.li}>{skills}</li>
        <li className={styles.li}>{projects}</li>
        <li className={styles.li}>{contact}</li>
      </ul>

      <button className={styles.button}>Resume</button>
    </div>
  );
};

export default NavLinks;
