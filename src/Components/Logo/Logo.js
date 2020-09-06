import React, { useEffect } from "react";
import logoImage from "./../../img/logo.png";

const Logo = () => {
  const a = 0;

  useEffect(() => {
    const rep = fetch(`https://arcane-sierra-37425.herokuapp.com/`);
    console.log(rep);
  }, [a]);
  return (
    <img
      style={{ paddingTop: "30px" }}
      height="130px"
      src={logoImage}
      alt="WatchLife Logo"
    />
  );
};

export default Logo;
