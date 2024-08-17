import { Container } from "../index"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { NavLink, useSearchParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

function Header() {
    // handleSearch function for show the searach bar
    const [openSearch, setOpenSearch] = useState();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const handleSearch = () => {
        setOpenSearch(!openSearch)
    }
    const mainMenu = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Blog articles",
            link: "blog"
        },
        {
            title: "About me",
            link: "aboutme"
        },
        {
            title: "My projects",
            link: "myproject"
        },
        {
            title: "Contact me",
            link: "contactme"
        },
    ]
    return (

        <div className="relative">
            <div className="bg-white shadow-lg md:block hidden">
                <Container>
                    {/* top menu */}
                    <div className='flex flex-row justify-between items-center '>
                        <div>Logo</div>
                        <div className="text-Gray flex flex-row space-x-1">Modern Javascript book is available! <strong className="flex  items-center cursor-pointer ms-2 text-Gray">Check out <IoIosArrowBack className="rotate-180" /></strong></div>
                        <div>
                            {!openSearch && <CiSearch size={30} className="text-Gray cursor-pointer" onClick={handleSearch} />}
                            {openSearch &&
                                <div className="relative delay-1000 duration-100000">
                                    <CiSearch size={30} className=" cursor-pointer absolute right-0  text-Gray" onClick={handleSearch} />
                                    <input type="text" placeholder="search" className="text-xl  text-Gray outline-none  border-b-2 border-Gray/10" />
                                </div>
                            }

                        </div>
                    </div>
                    {/* main menu */}
                    <div className="mt-8 flex flex-row  justify-between">
                        <div>
                            <ul className="flex flex-row items-center space-x-4">
                                {mainMenu && mainMenu?.map((item) => (
                                    <NavLink to={item.link} className={({ isActive }) => (
                                        ` ${isActive ? "text-red-400" : ""}  text-xl hover:underline text-Gray hover:text-EeieBlack cursor-pointer`
                                    )} key={item.title}>{item.title}</NavLink>
                                ))}
                            </ul>


                        </div>
                        <div className="">
                            <h5 className="text-EeieBlack flex flex-row items-center space-x-3 hover:underline text-xl cursor-pointer"> <CiShoppingCart className="me-1" size={30} /> Buy products</h5>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="px-8 py-4 text-black md:hidden shadow-md  mb-4 flex flex-row items-center justify-between">
                <div>Logo</div>
                <div ><IoIosMenu className={`${mobileMenuOpen ? "text-red-400" : "text-black"}`} size={35} onClick={() => { setMobileMenuOpen(true) }} /></div>
            </div>
            <div
                className={`bg-white p-8 shadow-lg md:hidden transition-all duration-300 delay-300    w-full h-screen absolute right-0 top-20 z-[10000000]  "
                   ${mobileMenuOpen === true ? "translate-x-0" : "-translate-x-full"} }`}
            >

                <div>
                    <IoCloseCircle className="ms-auto mb-4" size={30} onClick={() => { setMobileMenuOpen(false) }} />

                    <div>
                        {/* top menu */}
                        <div className=' '>
                            <div className="flex flex-row justify-between items-center">
                                <div>Logo</div>
                                <div>
                                    {!openSearch && <CiSearch size={25} className="text-Gray cursor-pointer" onClick={handleSearch} />}
                                    {openSearch &&
                                        <div className="relative delay-1000 duration-100000">
                                            <CiSearch size={25} className=" cursor-pointer absolute right-0  text-Gray" onClick={handleSearch} />
                                            <input type="text" placeholder="search" className="text-xl  text-Gray outline-none  border-b-2 border-Gray/10" />
                                        </div>
                                    }

                                </div>
                            </div>
                            <div className="text-Gray mt-2 flex flex-row  items-center">Modern Javascript book is available! <strong className="flex  items-center cursor-pointer ms-2  text-Gray text-sm">Check out <IoIosArrowBack className="rotate-180" /></strong></div>

                        </div>
                        {/* main menu */}
                        <div className="mt-8 ">
                            <div>
                                <ul className="flex flex-col items-start space-y-2">
                                    {mainMenu && mainMenu?.map((item) => (
                                        <NavLink onClick={() => { setMobileMenuOpen(false) }} to={item.link} className={({ isActive }) => (
                                            ` ${isActive ? "text-red-400" : ""}  text-xl hover:underline text-Gray hover:text-EeieBlack cursor-pointer`
                                        )} key={item.title}>{item.title}</NavLink>
                                    ))}
                                </ul>


                            </div>
                            <div className="">
                                <h5 className="text-EeieBlack pt-2 flex flex-row items-center space-x-3 hover:underline text-xl cursor-pointer"> <CiShoppingCart size={30} /> Buy products</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header