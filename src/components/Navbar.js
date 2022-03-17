import React from "react";
import "./Navbar.css"

export default function Navbar() {
  return (
    // <header classNameName="bg-gray-800 md:sticky top-0 z-10">
    //   <div classNameName="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a classNameName="title-font font-medium text-white mb-4 md:mb-0">
    //       <a href="#about" classNameName="ml-3 text-xl">
    //         Reed Barger
    //       </a>
    //     </a>
    //     <nav classNameName="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
    //       <a href="#projects" classNameName="mr-5 hover:text-white">
    //         Past Work
    //       </a>
    //       <a href="#skills" classNameName="mr-5 hover:text-white">
    //         Skills
    //       </a>
    //       <a href="#testimonials" classNameName="mr-5 hover:text-white">
    //         Testimonials
    //       </a>
    //     </nav>
    //     <a
    //       href="#contact"
    //       classNameName="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
    //       Hire Me
          
    //     </a>
    //   </div>
    // </header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a className="navbar-brand" href="#Home">Sushant Toraskar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#skills"> Skills </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testimonials">Testimonials</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
  );
}