import styles from "./About.module.css";
import Line from "../../Images/Line1.png";
// import Photo from "../../Images/Foto.png";

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
            Etiam lectus odio, viverra id risus eget, egestas viverra libero.
            Integer imperdiet dolor nec neque hendrerit, ut auctor arcu
            suscipit. Sed ut scelerisque tellus, at consequat arcu. Ut lacinia,
            quam ac finibus fermentum, elit urna tristique augue, quis
            scelerisque diam urna id ligula. Quisque elementum, dui et suscipit
            tempor, nisl lacus ornare metus, vitae malesuada metus mauris id
            diam. Sed facilisis in magna quis aliquam. Integer ac vulputate leo.
          </p>
          <p className={styles.etiquetaP}>{etiquetaPCierre}</p>
        </div>
      </div>

      <div className={styles.frame_container}>
        <div className={styles.frame}>
          <div className={styles.filter}>
            {/* <img src={Photo} className={styles.photo} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
