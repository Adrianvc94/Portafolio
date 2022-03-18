import styles from "./About.module.css";
import Line from "../../Images/Line1.png";

const About = () => {
  var etiquetaH2Apertura = "<h2>";
  var etiquetaH2Cierre = "</h2>";

  var etiquetaPApertura = "<p>";
  var etiquetaPCierre = "</p>";

  return (
    <div id="about" className={styles.container}>
      <div className={styles.text_container}>
        <div className={styles.title_container}>
          <p className={styles.etiquetaP}>{etiquetaH2Apertura}</p>
          <h2 className={styles.about}>
            About me
            <img className={styles.image} src={Line} alt="Decorative line" />
          </h2>
          <p className={styles.etiquetaP}>{etiquetaH2Cierre}</p>
        </div>

        <div className={styles.description_container}>
          <p className={styles.etiquetaP}>{etiquetaPApertura}</p>
          <p className={styles.description}>
            Hello! My name is Adrian and I enjoy creating things that live on
            the internet. My interest in web development started a couple of
            months ago when I took a course about web design. There, I
            discovered that the process of creating a website from scratch and
            deploying it to the internet is fun and interesting, so from there,
            I decided to learn more about how it works.
          </p>
          <p className={styles.etiquetaP}>{etiquetaPCierre}</p>
        </div>
      </div>

      {/* <div className={styles.frame_container}>
        <div className={styles.frame}>
          <div className={styles.filter}>
            <img alt="Headshot" src={Photo} className={styles.photo} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
