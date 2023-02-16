import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  const path = usePathname();

  return (
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
    </header>
  );
};

export default Header;
