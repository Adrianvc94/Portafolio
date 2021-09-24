import styles from './Skill.module.css';

const Skill = (props) => {
  return (
    <div className={styles.gallery_item}>
      <img className={styles.image}
        src={props.image}
        alt="some"
      />
    </div>
  );
};

export default Skill;
