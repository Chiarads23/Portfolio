import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import { motion } from "framer-motion";
const Header = () => {
  return (<motion.div  animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}>
    <header className={styles.header}>
      <h1 className={styles.title}>Chiara De Santis</h1>
      <p>Junior Front end Dev</p>
      <nav className={styles.navbar}>
        <Link href="/Skills" className={styles.navLink1}>
        Skills and education
        </Link>
        <Link href="/AboutMe" className={styles.navLink2}>
          About me
        </Link>
        <Link href="/BesidesCoding" className={styles.navLink3}>
          Besides coding
        </Link>
      </nav>
    </header></motion.div>
  );
};

export default Header;
