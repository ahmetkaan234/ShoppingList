import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ImBehance } from "react-icons/im";

const SmallContact = () => {
  return (
    <div className="w-full border border-t-0 p-2" >
    <div className="flex  flex-col   md:flex-row  w-full md:w-7/12 mx-auto justify-between items-center  mt-28">
      <div className="flex flex-row   justify-center md:justify-start items-center  w-full" >
        <p className="text-xs font-semibold">
          We're confident we've provided all the best for you. Stay connect with
          us
        </p>
      </div>
      <div className="flex flex-row justify-end items-center w-3/5  md:w-1/3 mx-auto   mt-5 sm:mt-0" >
      <div className="flex flex-row  justify-between items-end mx-auto w-full " >
        <button className="">
          <FaFacebookF />
        </button>
        <button className="">
          <BsInstagram />
        </button>
        <button className="">
          <BsTwitter />
        </button>
        <button className="">
          <GrLinkedinOption />
        </button>
        <button className="">
          <ImBehance />
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default SmallContact;
