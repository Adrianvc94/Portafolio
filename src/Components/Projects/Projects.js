import styles from "./Projects.module.css";
import Line from "../../Images/Line1.png";

import Project from "../Project/Project";

const Projects = () => {
  var etiquetaH2Apertura = "<h2>";
  var etiquetaH2Cierre = "</h2>";

  var description = "Vestibulum laoreet ipsum in elementum dignissim. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora orquent per conubia nostra";

  return (
    <section className={`container ${styles.main_container}`}>
      <div className={styles.title_container}>
        <p className={styles.etiquetaP}>{etiquetaH2Apertura}</p>
        <h2 className={styles.projects}>
          Projects that I've build
          <img className={styles.image} src={Line} alt="Decorative line" />
        </h2>
        <p className={styles.etiquetaP}>{etiquetaH2Cierre}</p>
      </div>

      <div className={`row g-4 ${styles.grid}`}>

        <Project github="www.github.com" link="example.com" title="Project One" description={description} tecnologies="HTML, CSS, JS"/>
        <Project github="www.github.com" link="example.com" title="Project Two" description={description} tecnologies="Node, React"/>
        <Project github="www.github.com" link="example.com" title="Project Three" description={description} tecnologies="MongoDB, JS"/>
        
        <Project github="www.github.com" link="example.com" title="Project Four" description={description} tecnologies="Angular, .Net"/>
        <Project github="www.github.com" link="example.com" title="Project Five" description={description} tecnologies="SQL Server, C#"/>
        <Project github="www.github.com" link="example.com" title="Project Six" description={description} tecnologies="HTML, CSS, JS"/>
        
      </div>
    </section>
  );
};

export default Projects;
