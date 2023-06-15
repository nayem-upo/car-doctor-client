import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Header = () => {
    const { LogOut, user } = useContext(AuthContext)
    const userLogout = () => {
        LogOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
    }
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className="mr-5 hover:text-gray-900">Home</Link></li>
                            <li><Link className="mr-5 hover:text-gray-900">About</Link></li>
                            <li><Link className="mr-5 hover:text-gray-900">Services</Link></li>
                            <li><Link className="mr-5 hover:text-gray-900">Blog</Link></li>
                            <li><Link className="mr-5 hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/assets/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><Link className="mr-5 hover:text-gray-900">Home</Link></li>
                        <li><Link className="mr-5 hover:text-gray-900">About</Link></li>
                        <li><Link className="mr-5 hover:text-gray-900">Services</Link></li>
                        <li><Link className="mr-5 hover:text-gray-900">Blog</Link></li>
                        <li><Link className="mr-5 hover:text-gray-900">Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-5">
                        <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        {
                            user ?
                                <svg onClick={userLogout} className="cursor-pointer" width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                                : <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M13 12L21 12" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M16 15L13.087 12.087V12.087C13.039 12.039 13.039 11.961 13.087 11.913V11.913L16 9" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                        }
                        <button className="inline-flex items-center text-[#FF3811] border-[#FF3811] border py-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Appointment
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;