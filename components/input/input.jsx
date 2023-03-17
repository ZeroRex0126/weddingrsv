import style from "./input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Input = ({
  name,
  title,
  value,
  type,
  width,
  options,
  onValueChange,
  onKeyPress,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  function showPasswordFunc() {
    setShowPassword(!showPassword);
  }
  switch (type) {
    case "textarea":
      return (
        <div
          className={style.inputbox}
          style={{
            width: width ? width : "250px",
          }}
        >
          <textarea
            placeholder=" "
            value={value ? value : ""}
            cols="30"
            rows="10"
            onKeyDown={
              onKeyPress
                ? (e) => {
                    onKeyPress(e);
                  }
                : ""
            }
            onChange={(v) => {
              onValueChange(v);
            }}
          />
          <span>{title}</span>
        </div>
      );
    case "select":
      return (
        <div
          className={style.inputbox}
          style={{
            width: width ? width : "250px",
          }}
        >
          <select
            onChange={(v) => {
              onValueChange(v);
            }}
          >
            <option key={0} value="">
              --Select a option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>{title}</span>
        </div>
      );
    default:
      return (
        <div
          className={style.inputbox}
          style={{
            width: width ? width : "250px",
          }}
        >
          <input
            name={name}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            placeholder=" "
            value={value ? value : ""}
            onKeyDown={
              onKeyPress
                ? (e) => {
                    onKeyPress(e);
                  }
                : ""
            }
            onChange={(v) => {
              onValueChange(v);
            }}
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
  }
};

export default Input;
