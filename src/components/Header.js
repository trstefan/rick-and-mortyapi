import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="grid place-self-center p-2">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};
