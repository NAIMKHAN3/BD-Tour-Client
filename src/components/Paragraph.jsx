
const Paragraph = (props) => {
    return (
        <p className={`${props.className}`}>{props.children}{props.value}</p>
    );
};

export default Paragraph;