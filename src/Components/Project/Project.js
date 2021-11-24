import styles from "./Project.module.css";
import folder from "../../Images/folder.png";
import github from "../../Images/github.png";
import link from "../../Images/link.png";

const Project = (props) => {
  return (
    <div className="col-md-6">
      <div className="card h-100">
        <div className={`card-body ${styles.container}`}>
          <div className={styles.images_container}>
            <img src={folder} alt="Folder" />
            <div>
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.github_link}
                  src={github}
                  alt="Github of the project"
                />
              </a>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.github_link}
                  alt="Link for the project"
                  src={link}
                />
              </a>
            </div>
          </div>
          <h5 className={`card-title ${styles.title}`}>{props.title}</h5>
          <img
            className={`card-img ${styles.projectImg}`}
            src={props.projectImg}
            alt="Demo"
          />
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.tecnologies}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
