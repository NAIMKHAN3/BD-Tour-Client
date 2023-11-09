
const Heading = (props) => {
    return (
        <h1 className={`${props.className}`}>{props.children}{props.value}</h1>
    );
};

export default Heading;