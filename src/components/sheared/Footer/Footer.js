import React from "react";
import { Link } from "react-router-dom";

const Footer = ({position}) => {
  console.log(position);
  return (
    <footer className={`${position && position} flex flex-col w-[99.1vw] bottom-0 p-6 bg-[#161616] text-[#fffff0]`}>
      <div className="footer md:justify-items-center">
        <div>
          <span className="footer-title text-xl opacity-100 text-white">Services</span>
          <Link to="" className="link link-hover text-lg font-medium">Branding</Link>
          <Link to="" className="link link-hover text-lg font-medium">Design</Link>
          <Link to="" className="link link-hover text-lg font-medium">Marketing</Link>
          <Link to="" className="link link-hover text-lg font-medium">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title text-xl opacity-100 text-whites">Company</span>
          <Link to="" className="link link-hover text-lg font-medium">About us</Link>
          <Link to="" className="link link-hover text-lg font-medium">Contact</Link>
          <Link to="" className="link link-hover text-lg font-medium">Jobs</Link>
          <Link to="" className="link link-hover text-lg font-medium">Press kit</Link>
        </div>
        <div>
          <span className="footer-title text-xl opacity-100 text-whites">Legal</span>
          <Link to="" className="link link-hover text-lg font-medium">Terms of use</Link>
          <Link to="" className="link link-hover text-lg font-medium">Privacy policy</Link>
          <Link to="" className="link link-hover text-lg font-medium">Cookie policy</Link>
        </div>
      </div>
      <h3 
        className="text-white text-center mt-10">
        <span className="text-orange-300 mr-4">&copy;</span>
        All copyright reserved to Orbit tools- {new Date().getFullYear()}
        <span className="text-orange-300 ml-4">&copy;</span>
      </h3>
    </footer>
  );
};

export default Footer;
