import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bethvour-chike/">
        <BsLinkedin />
      </a>
      <a href="http://github.com/bethvourc">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
