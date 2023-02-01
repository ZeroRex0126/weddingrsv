import style from "./input.module.scss";

const Input = ({ title, value, type }) => {
  return (
    <div className={style.inputbox}>
      <input type={type} placeholder=" " value={value ? value : ""} />
      <span>{title}</span>
    </div>
  );
};

export default Input;
