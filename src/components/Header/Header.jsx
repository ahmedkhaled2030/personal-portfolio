import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShow = useHeaderShow();
  const menuRef = useRef();

  useOutsideAlerter({menuRef,setMenuOpened})

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
          className={`paddings ${css.wrapper}`}
          style={{boxShadow:headerShow}}
    >
      {/* fadeIn('right' , 'tween','delay','duration') */}
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={`css.name`}>Ahmed</div>
        <ul
          className={`flexCenter  ${css.menu}`}
          style={getMenuStyles(menuOpened)}
          ref={menuRef}
        >
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123 456 789</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div
          className={`${css.menuIcon}`}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
