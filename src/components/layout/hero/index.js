import React from "react";
import css from "./hero.module.scss";
import { toAbsoluteUrl } from "../../../utils";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../utils/motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br />
            I'am Jay.
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I design beautiful Sample
            <br />
            things, And I love What i do
          </motion.span>
        </div>
        {/* Person Image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.2, 1)}
            src={toAbsoluteUrl("images/person.png")}
          />
        </motion.div>

        {/* Email */}
        <a className={css.email} href="mailto:admin@example.com">
          admin@example.com
        </a>

        {/* Lower Elements */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={css.certificate}
          >
            <img src={toAbsoluteUrl("images/certificate.png")} alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
