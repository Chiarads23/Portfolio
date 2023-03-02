import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Besides.module.scss";
import { motion } from "framer-motion";

const BesidesCoding = () => {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }} 
    className={styles.besides}>
      <h3>Besides coding</h3><h5>..my voice</h5>
      <div className="ratio ratio-4x3">
        
        <iframe
          src="https://www.youtube.com/embed/gGfijDTU3is"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default BesidesCoding;
