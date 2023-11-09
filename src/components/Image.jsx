
const Image = (props) => {
    return (
        <img className={`${props.className}`} src={props.src} alt="" />
    );
};

export default Image;