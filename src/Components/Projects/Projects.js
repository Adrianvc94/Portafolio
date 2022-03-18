import styles from "./Projects.module.css";
import Line from "../../Images/Line1.png";
import movie_app from "../../Images/movie-app.png";
import Bookstore from "../../Images/Bookstore.png";
import SortingVisualizer from "../../Images/SortingVisualizer.png";
import ChatApp from "../../Images/ChatApp.png";

import Project from "../Project/Project";

const Projects = () => {
  const etiquetaH2Apertura = "<h2>";
  const etiquetaH2Cierre = "</h2>";

  const MovieList_Description =
    "The project makes use of TMDb (The Movie Database) API to search for movie and TV show data.";

  const Bookstore_Description =
    "Full-Stack project where users can login, see different books, create collections of books and add then to a wishlist";

  const Visualizer_Description =
    "Developed a visualizer to show how different sorting algorithms work in real time";

    const ChatApp_Description =
    "Created a website using ReactJS in which users can add contacts and start conversations";

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
        <Project
          github="https://github.com/Adrianvc94/Bookstore"
          link="http://bookstore.eastus.azurecontainer.io/"
          title="Bookstore"
          description={Bookstore_Description}
          tecnologies=".NET 6, MVC, C#, SQL Server, RESTful APIs, Bootstrap, Docker, Azure Cloud"
          projectImg={Bookstore}
        />

        <Project
          github="https://github.com/Adrianvc94/SortingVisualizer-JS"
          link="https://adrianvc94.github.io/SortingVisualizer-JS/"
          title="Sorting Algorithm Visualizer"
          description={Visualizer_Description}
          tecnologies="ReactJS, Hooks (State/Effect), CSS modules"
          projectImg={SortingVisualizer}
        />

        <Project
          github="https://github.com/Adrianvc94/ChatAppClient"
          link="https://adrianvc94.github.io/ChatAppClient/"
          title="Real Time Message App "
          description={ChatApp_Description}
          tecnologies="ReactJS, Hooks (State/Effect/Context), Custom Hooks, NodeJS, Express, Bootstrap"
          projectImg={ChatApp}
        />

        <Project
          github="https://github.com/Adrianvc94/Movie-App"
          link="https://adrianvc94.github.io/Movie-App/"
          title="Movie List"
          description={MovieList_Description}
          tecnologies="HTML, CSS, JS"
          projectImg={movie_app}
        />

      </div>
    </section>
  );
};

export default Projects;
