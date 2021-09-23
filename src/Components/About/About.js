import styles from "./About.module.css";
import Line from "../../Images/Line1.png";
// import Photo from "../../Images/Foto.png";

const About = () => {
  var etiquetaH2Apertura = "<h2>";
  var etiquetaH2Cierre = "</h2>";

  var etiquetaPApertura = "<p>";
  var etiquetaPCierre = "</p>";

  return (
    <div className={styles.container}>
      <div>
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
            Nacido en Okinawa en 1992. Después de graduarme de la universidad,
            después de conseguir un trabajo como operador de DTP en una empresa
            de producción en la prefectura, estuve a cargo de operar los sitios
            web corporativos de más de una docena de empresas, principalmente
            grandes minoristas masivos de ropa masculina. En 2017, comencé a
            trabajar como diseñador web como individuo y estoy brindando soporte
            integral para fotografía, diseño y codificación.
          </p>
          <p className={styles.etiquetaP}>{etiquetaPCierre}</p>
        </div>
      </div>

      <div>
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
