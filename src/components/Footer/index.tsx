import React from "react";
import CSS from "./footer.module.css";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={clsx(CSS.footer, "items-center flex justify-center")}>
      © 2023 hiep.nguyen
    </footer>
  );
};

export default Footer;
