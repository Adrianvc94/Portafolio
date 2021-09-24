import styles from "./Skills.module.css";
import Skill from "../Skill/Skill";
import Line from "../../Images/Line1.png";

import HTML from "../../Images/HTML_Logo.png";
import CSS from "../../Images/CSS_Logo.png";
import JS from "../../Images/JS_Logo.png";
import Line2 from "../../Images/Line2.png";

const Skills = () => {
  var etiquetaH2Apertura = "<h2>";
  var etiquetaH2Cierre = "</h2>";

  // C#
  // SQL
  // React
  // 

  return (
    <section className={styles.container}>
      <img src={Line2} className={styles.line} alt="Decorative line" />
      <div className={styles.title_container}>
        <p className={styles.etiquetaP}>{etiquetaH2Apertura}</p>
        <h2 className={styles.skills}>
          Skills
          <img className={styles.image} src={Line} alt="Decorative line" />
        </h2>
        <p className={styles.etiquetaP}>{etiquetaH2Cierre}</p>
      </div>

      <div className={styles.gallery}>
        <Skill image={HTML} />
        <Skill image={CSS} />
        <Skill image={JS} />

        <Skill image={HTML} />
        <Skill image={CSS} />
        <Skill image={JS} />
        <Skill image={JS} />
        
      </div>
    </section>
  );
};

export default Skills;
