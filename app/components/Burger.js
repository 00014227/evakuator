"use client"
import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll"

export default function Burger({close, handleClick }) {

 

    return (
        <div className="lg:hidden w-full bg-[#404040] h-[4rem] flex items-center justify-end pr-4">
            <button onClick={handleClick} className=' '>
                <svg width="50px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#F39F1F" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12L20 12" stroke="#F39F1F" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 6L20 6" stroke="#F39F1F" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            {close ? (
                <div className="bg-[#404040] p-[5rem] w-[25rem] opacity-90 absolute top-[4.5rem] transition-opacity duration-300 ease-in-out">
                    <ul className=" space-y-4">
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl font-semibold uppercase"><Link to="hero"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} >главная</Link></li>
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl  font-semibold uppercase"><Link to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} >о нас</Link></li>
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl  font-semibold uppercase"><Link to="price"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} >цены</Link></li>
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl  font-semibold uppercase">вызвать</li>
                    </ul>
                </div>) : null
            }

        </div>
    )
}
