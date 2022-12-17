import style from './input.module.scss'

const Input = ({title}) => {
    return (
        <div className={style.inputbox}>
            <input type="text" placeholder=' ' />
            <span>{title}</span>
        </div>
    );
}

export default Input;