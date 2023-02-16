import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/src/Components/footer/Footer";
import Header from "@/src/Components/header/Header";
import Homelink from "@/src/Components/homelink/Homelink";
import styles from "@/styles/Main.module.scss";

const MainLayout = ({ children }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
        className={styles.App}
      >
        <Homelink />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
