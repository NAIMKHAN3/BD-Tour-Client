import Heading from "../components/Heading";
import { BsTelephone, BsFacebook, BsYoutube, BsLinkedin, BsInstagram , BsFillHeartFill} from 'react-icons/bs'
import NavbarIcon from "../components/NavbarIcon";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";


const Navbar = () => {
    const dispatch = useDispatch();
const {email} = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(removeUser())
        toast.success("Sign out success")
    }
    return (
        <div>
            <div className='bg-primary text-white py-2 hidden lg:block'>
                <div className=' w-4/5 mx-auto flex justify-between items-center'>
                    <Heading className={"flex items-center"}><BsTelephone className='mr-2' /> +88 09613 441122</Heading>
                    <div className='flex'>
                        <NavbarIcon>
                            <BsFacebook />
                        </NavbarIcon>
                        <NavbarIcon>
                            <BsYoutube />
                        </NavbarIcon>
                        <NavbarIcon>
                            <BsLinkedin />
                        </NavbarIcon>
                        <NavbarIcon>
                            <BsInstagram />
                        </NavbarIcon>
                        <NavbarIcon>
                        
                            <BsFillHeartFill />
                        
                        </NavbarIcon>

                    </div>
                </div>
            </div>
            <div className='bg-[#f2f5fc] py-2 shadow-md hidden lg:block'>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
                    <Image className={"w-36"} src={"https://i.ibb.co/tCp8p57/Capture-removebg-preview.png"} />
                    <div className='flex items-center'>
                        <Link to='/home'><Paragraph className={"mr-5 font-semibold hover:text-secondary duration-300 cursor-pointer"}>Home</Paragraph></Link>
                        
                        <Link to='/about'><Paragraph className={"mr-5 font-semibold hover:text-secondary duration-300 cursor-pointer"}>About</Paragraph></Link>
                        {
                            email ? <>
                                <Link to='/my-booking'><Paragraph className={"mr-5 font-semibold hover:text-secondary duration-300 cursor-pointer"}>My booking</Paragraph></Link>
                                <Button onClick={handleLogout} className={"mr-5"}>Signout</Button>
                            </>
                                : <>
                                    <Link to='/signin'><Paragraph className={"mr-5 font-semibold hover:text-secondary duration-300 cursor-pointer"}>Sign In</Paragraph></Link>
                                    <Link to='/signup'><Paragraph className={"mr-5 font-semibold hover:text-secondary duration-300 cursor-pointer"}>Sign Up</Paragraph></Link>
                                   
                                </>
                        }



                    </div>
                </div>
            </div>
            <MobileNavbar/>
        </div>
    );
};

export default Navbar;