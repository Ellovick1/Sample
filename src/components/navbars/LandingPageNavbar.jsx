import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"


const Navbar = () => {
    const [show, setShow] = useState("hide")
    const showHandler = ()=>{
        if (show == "show"){
            setShow("hide")
        }if (show == "hide"){
            setShow("show")
        }
    }
  return (
    <div className='sticky top-0 z-50'>
        <div className="relative"> 
            <div className="flex mx-auto px-12 justify-between items-center py-6 md:justify-start md:space-x-4">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                <span className="sr-only">Logo</span>
                <img className="h-10 w-10 sm:h-10" src={logo} alt="Mend" />
                </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden duration-700">
                <button type="button" onClick={showHandler} className=" rounded-md p-2 inline-flex items-center justify-center text-[#363469]" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" /></svg>
                </button>
            </div>
            <nav className="hidden md:flex space-x-5">
                <Link to="/why-mend" className="hover:border-b-4 border-b-[#7f3dff] duration-300 text-sm font-medium text-[#363469] hover:text-gray-700 p-3"><h2>Why Mend</h2></Link>
                <Link to="/our-solution" className="hover:border-b-4 border-b-[#7f3dff] duration-300 text-sm font-medium text-[#363469] hover:text-gray-700 p-3"><h2>Our Solution</h2></Link>
                <Link to="/properties" className="hover:border-b-4 border-b-[#7f3dff] duration-300 text-sm font-medium text-[#363469] hover:text-gray-700 p-3"><h2>Properties</h2></Link>
                <Link to="/residents" className="hover:border-b-4 border-b-[#7f3dff] duration-300 text-sm font-medium text-[#363469] hover:text-gray-700 p-3"><h2>Residents</h2></Link>
                <div>
                <h2 onClick={showHandler} data-dropdown-toggle="dropdown" className="text-[#363469] font-medium hover:cursor-pointer text-sm p-3 text-center inline-flex items-center" type="button">Partnership<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7"></path></svg></h2>
                <div className={`${show === "hide" ? "hidden" : "z-10 absolute bg-[#363469] w-36"} `} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                    <ul className="py-1 text-sm text-white" aria-labelledby="dropdownDefault">
                        <li>
                            <Link to="/partnership" className="block px-4 py-2 hover:bg-[#5b59a57f]"><h2>Partner with us</h2></Link>
                        </li>
                        <li>
                            <Link to="/community" className="block px-4 py-2 hover:bg-[#5b59a57f]"><h2>Community</h2></Link>
                        </li>
                    </ul>
                </div>
                </div>
                <Link to="/contact" className="hover:border-b-4 border-b-[#7f3dff] duration-300 text-sm font-medium text-[#363469] hover:text-gray-700 p-3"><h2>Contact</h2></Link>
                <Link to="/login" className="text-center text-sm font-medium text-[#363469] hover:text-gray-700"><h2 className='bg-[#7F3DFF] rounded-full text-white p-3 w-36 mx-auto'>Login</h2></Link>
            </nav>
            </div>
        </div>
        <div className="absolute -top-0 inset-x-0 p-2 origin-top-right md:hidden">
            <div className={`bg-[#e3b1b1] text-center min-h-screen text-5xl divide-y-2 ${show == "hide" && "hidden"}`}>
            <div className="pt-5 pb-6 px-5 duration-700">
                <div className="flex items-center justify-between">
                <div>
                    <Link to="/">
                        <img className="h-10 w-auto" src={logo} alt="Mend" />
                    </Link>
                </div>
                <div className="-mr-2">
                    <button type="button" onClick={showHandler} id='closeMenu' className="rounded-md p-2 inline-flex items-center justify-center text-[#363469]">
                    <span className="sr-only">Close menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                </div>
                <div className="my-12">
                <nav className="space-x-10 transition duration-700 ease-in-out">
                    <Link onClick={showHandler} to="/why-mend" className="text-2xl font-medium text-[#363469] hover:text-gray-700"><h2>Why Mend</h2></Link>
                    <Link onClick={showHandler} to="/our-solution" className="text-2xl font-medium text-[#363469] hover:text-gray-700"><h2>Our Solution</h2></Link>
                    <Link onClick={showHandler} to="/properties" className="text-2xl font-medium text-[#363469] hover:text-gray-700"><h2>Properties</h2></Link>
                    <Link onClick={showHandler} to="/residents" className="text-2xl font-medium text-[#363469] hover:text-gray-700"><h2>Residents</h2></Link>
                    <Link onClick={showHandler} to="/contact" className="text-2xl font-medium text-[#363469] hover:text-gray-700"><h2>Contact</h2></Link>
                    <Link onClick={showHandler} to="/login" className="text-xl font-medium hover:text-gray-700"><h2 className='bg-[#7F3DFF] rounded-full text-white p-3 w-44 mx-auto'>Login</h2></Link>
                </nav>
                </div>
            </div>
            </div>
        </div>
        </div>
  )}
export default Navbar