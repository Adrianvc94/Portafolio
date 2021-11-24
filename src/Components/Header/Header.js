import styles from "./Header.module.css";
import BrushStroke from "../../Images/BrushStroke.png";

const Header = () => {
  var etiquetaPApertura = "<p>";
  var etiquetaPCierre = "</p>";

  var etiquetaH1Apertura = "<h1>";
  var etiquetaH1Cierre = "</h1>";

  return (
    <div className={styles.main_container}>
      <div className={styles.header_container}>
        <div className={styles.hi_container}>
          <p className={styles.etiquetaP}>{etiquetaPApertura}</p>
          <p className={styles.intro}>Hi, my name is</p>
          <p className={styles.etiquetaP}>{etiquetaPCierre}</p>
        </div>

        <div className={styles.name_container}>
          <p className={styles.etiquetaH1}>{etiquetaH1Apertura}</p>
          <h1 className={styles.name}>Adrian Vinicio.</h1>
          <p className={styles.etiquetaH1}>{etiquetaH1Cierre}</p>
        </div>

        <div className={styles.description_container}>
          <p className={styles.etiquetaP}>{etiquetaPApertura}</p>
          <p className={styles.description}>
            I'm a third year student at ULACIT studying Informatic Engineering,
            who not so long ago has found a liking in building web pages and
            coding.
          </p>
          <p className={styles.etiquetaP}>{etiquetaPCierre}</p>
        </div>
      </div>

      <picture className={styles.image_container}>
        <img src={BrushStroke} className={styles.image} alt="Brush stroke" />
      </picture>
    </div>
  );
};

export default Header;
