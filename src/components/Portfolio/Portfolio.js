import React from "react";
import css from "./portfolio.module.scss";
import { motion } from "framer-motion";
import { toAbsoluteUrl } from "../../utils";
import { fadeIn, staggerChildren } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a href="" className="anchor" id="portfolio" />
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect Solution For digital Experience
            </p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* images */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={toAbsoluteUrl("images/showCase1.png")}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={toAbsoluteUrl("images/showCase2.png")}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={toAbsoluteUrl("images/showCase3.png")}
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
