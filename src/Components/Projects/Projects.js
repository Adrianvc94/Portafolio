import styles from "./Projects.module.css";
import Line from "../../Images/Line1.png";
import movie_app from "../../Images/movie-app.png";

import Project from "../Project/Project";

const Projects = () => {
  var etiquetaH2Apertura = "<h2>";
  var etiquetaH2Cierre = "</h2>";

  var MovieList_Description = "The project makes use of TMDb (The Movie Database) API to search for movie and TV show data.";

  var Weather_Description = "This project takes weather information from the OpenWeather API  based on the location";

  return (
    <section id="projects" className={`container ${styles.main_container}`}>
      
      <div className={styles.title_container}>
        <p className={styles.etiquetaP}>{etiquetaH2Apertura}</p>
        <h2 className={styles.projects}>
          Projects that I've build
          <img className={styles.image} src={Line} alt="Decorative line" />
        </h2>
        <p className={styles.etiquetaP}>{etiquetaH2Cierre}</p>
      </div>

      <div className={`row g-4 ${styles.grid}`}>

        <Project github="https://github.com/Adrianvc94/Movie-App" link="https://adrianvc94.github.io/Movie-App/" title="Movie List" description={MovieList_Description} tecnologies="HTML, CSS, JS" projectImg={movie_app}/>
        <Project github="www.github.com" link="example.com" title="Weather App" description={Weather_Description} tecnologies="HTML, CSS, JS" projectImg="https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162?k=20&m=1144514162&s=612x612&w=0&h=2mkQDmXYQ48LwS0lr0oTUXmF9VLChnemFWLRgBDJi58="/>

        {/* <Project github="www.github.com" link="example.com" title="Project Three" description={description} tecnologies="MongoDB, JS"/>
        <Project github="www.github.com" link="example.com" title="Project Four" description={description} tecnologies="Angular, .Net"/>
        <Project github="www.github.com" link="example.com" title="Project Five" description={description} tecnologies="SQL Server, C#"/>
        <Project github="www.github.com" link="example.com" title="Project Six" description={description} tecnologies="HTML, CSS, JS"/> */}
        
      </div>
    </section>
  );
};

export default Projects;
