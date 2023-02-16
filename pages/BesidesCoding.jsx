import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Besides.module.scss";

const BesidesCoding = () => {
  return (
    <div className={styles.besides}>
      <h3>Besides coding</h3>
      <div className="ratio ratio-4x3">
        <iframe
          src="https://www.youtube.com/embed/gGfijDTU3is"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BesidesCoding;
