import style from "./input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Input = ({ title, value, type, width }) => {
  const [showPassword, setShowPassword] = useState(false);
  function showPasswordFunc() {
    setShowPassword(!showPassword);
  }
  return (
    <div
      className={style.inputbox}
      style={{
        width: width ? width : "250px",
      }}
    >
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder=" "
        value={value ? value : ""}
      />
      <span>{title}</span>
      <FontAwesomeIcon
        icon={showPassword ? faEye : faEyeSlash}
        className={style.eyeIcon}
        onClick={showPasswordFunc}
        style={{
          display: type === "password" ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Input;
