
const Button = (props) => {
    return (
        <button onClick={props.onClick} type={props?.type} className={`${props.className} font-semibold   duration-300  px-4 py-2 rounded-md `}>{props.children}{props.value}</button>
    );
};

export default Button;