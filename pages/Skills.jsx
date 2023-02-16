import styles from "@/styles/Skills.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3>Skills</h3>
      <div className={styles.icons}>
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
    </div>
  );
};

export default Skills;
