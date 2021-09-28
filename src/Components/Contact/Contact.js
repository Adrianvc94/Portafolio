import styles from "./Contact.module.css";

import Circle from '../../Images/Circle.png';

const Contact = () => {
  var etiquetaH2Apertura = "<h2>";
  var etiquetaH2Cierre = "</h2>";

  return (
    <div className={`container ${styles.container_contact}`}>

        <img src={Circle} className={styles.circle} alt="Decorative circle"/>

      <div className={styles.title_container}>
        <p className={styles.etiquetaP}>{etiquetaH2Apertura}</p>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.etiquetaP}>{etiquetaH2Cierre}</p>
      </div>
      <button className={styles.button}>Say Hello</button>
    </div>
  );
};

export default Contact;
