import styles from "@/styles/Footer.module.scss";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        <h2 className={styles.title}>
          Chiara <br />
          De Santis
        </h2>
        <p className={styles.descr}>Junior Front end Dev</p>
      </div>
      <nav className={styles.footerNav}>
        <a href="https://github.com/Chiarads23" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/chiara-desantis/" target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>
        <a
          href={"/images/ChiaraDeSantisCV.jpg"}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
