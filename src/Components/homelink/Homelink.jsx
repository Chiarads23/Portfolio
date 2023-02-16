import Link from "next/link";
import { GiDividedSpiral } from "react-icons/gi";
import styles from "@/styles/Homelink.module.scss";

const Homelink = () => {
  return (
    <div className={styles.Homelink}>
      <Link href="/">
        <GiDividedSpiral />
      </Link>
    </div>
  );
};

export default Homelink;
