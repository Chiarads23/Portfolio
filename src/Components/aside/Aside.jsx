import styles from "@/styles/Aside.module.scss";

const Aside = () => {
  return (
    <div className={styles.aside}>
      <p>
        “Below the surface of the machine, the program moves. Without effort, it
        expands and contracts. In great harmony, electrons scatter and regroup.
        The forms on the monitor are but ripples on the water. The essence stays
        invisibly below.”
      </p>
      <cite>Master Yuan-Ma, The Book of Programming</cite>
    </div>
  );
};

export default Aside;