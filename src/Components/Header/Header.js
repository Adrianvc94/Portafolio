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
            Etiam lectus odio, viverra id risus eget, egestas viverra libero.
            Integer imperdiet dolor nec neque hendrerit, ut auctor arcu
            suscipit. Sed ut scelerisque tellus, at consequat arcu. Ut lacinia,
            quam ac finibus fermentum 
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
