

const NavbarIcon = (props) => {
    return (
        <span className='ml-5 border rounded-full p-2 hover:bg-white hover:text-secondary cursor-pointer duration-300'>{props.children}</span>
    );
};

export default NavbarIcon;