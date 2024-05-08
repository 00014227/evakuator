import React from 'react'
import { Link } from "react-scroll"

export default function Navbar() {
  return (
    <nav className=" lg:block hidden w-full bg-[#F39F1F] 2xl:py-8 lg:py-5 pl-[16rem]">
    <ul className="flex justify-between max-w-[35rem]">
      <li className="text-[#404040] 2xl:text-2xl lg:text-xl font-semibold uppercase cursor-pointer"><Link to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500} >главная</Link></li>
      <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer"><Link to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500} >о нас</Link></li>
      <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer"><Link to="price"
        spy={true}
        smooth={true}
        offset={50}
        duration={500} >цены</Link></li>
      <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer">
        <a href="tel:+998950555555">вызвать</a>
        
        </li>
    </ul>
  </nav>
  )
}
