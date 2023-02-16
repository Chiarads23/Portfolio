import styles from '@/styles/AboutMe.module.scss';
import { motion } from "framer-motion";

 const AboutMe= () => {
    return(
        <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
         className={styles.AboutMe}>
            <h3>About me</h3>
            <h4>My coding journey started just a year ago, when  I was looking for a new path that could take out a new better version of me. And it has been a revelation so far. I've been able to make the most of my attention to details and endless curiosity to learn new ways of communication that allow people to connect.
            </h4>
        </motion.div>
    )
}

export default AboutMe;