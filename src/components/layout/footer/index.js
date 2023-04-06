import React from "react";
import css from "./footer.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../../utils/motion";

const Footer = () => {
  return (
    <>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div
          variants={staggerChildren}
          className={`innerWidth yPaddings flexCenter ${css.container}`}
        >
          <div className={css.left}>
            <span className="primaryText">
              Let's Make something <br /> amazing together.
            </span>
            <span className="primaryText">
              Start by <a href="mailto:jay.r@agileinfoways.com">Saying hi</a>
            </span>
          </div>

          <div className={css.right}>
            <span className="secondaryText">Information</span>
            <p>145 New York, Fl 5467,USA</p>

            <div className={css.menu}>
              <li>Services</li>
              <li>Works</li>
              <li>Notes</li>
              <li>Experience</li>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Footer;
