import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: false, amount: 0.25 }}
      className={` paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className={`primaryText`}>People talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an application was quite cosy</p>
              </div>
              

              <motion.div variants={footerVariants} className={`yPaddings ${css.comments}`}>
                  <Slider {...sliderSettings} className={css.slider}>
                      {comments.map((comment, i) => {
                          return (
                              <div className={`flexCenter ${css.comment}`}>
                                  <img src={comment.img} alt="" />
                                  <p>{comment.comment}</p>
                                  <div className={css.line}></div>

                                  <div className={css.bio}>
                                      <span>{comment.name}</span>
                                      <span>{comment.post }</span>
                                  </div>
                              </div>
                          )
                      })}
                  </Slider>
              </motion.div>
      </div>
    </motion.section>
  );
};

export default People;
