import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/src/Components/footer/Footer";
import Header from "@/src/Components/header/Header";
import Homelink from "@/src/Components/homelink/Homelink";
import styles from "@/styles/Main.module.scss";

const MainLayout = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.4 }}
        className={styles.App}
      >
        <Homelink />
        <Header />
        <main>
          {/* the children prop allows to render all the Pages components */}
          {children}
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
