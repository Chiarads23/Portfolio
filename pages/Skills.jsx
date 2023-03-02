import styles from "@/styles/Skills.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} 
      className={styles.skills}>
      <h3>Skills</h3>
      <div className={styles.icons}>
        <SiVisualstudiocode />
        <FaHtml5 />
        <FaCss3Alt />
        <SiJavascript />
        <FaReact />
        <FaSass />
        <TbBrandNextjs />
      </div>
      <h4>
        My knowledge in these fields is growing day by day, trying to learn the
        best practices and to build responsive and interactive web apps.{" "}
      </h4>
    </motion.div>
  );
};

export default Skills;
