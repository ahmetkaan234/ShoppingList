import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ImBehance } from "react-icons/im";

const TopFooter = () => {
  return (
    <div className="bg-black p-3 w-full  ">
      <div className="flex  flex-col md:flex-row justify-between container mx-auto  transition-all duration-700 ">
        <div className="flex  mb-4 md:mb-0   flex-row  justify-between  transition-all duration-700   ">
          <button className=" text-white text-xs  mr-2 ">
            <FontAwesomeIcon icon={faPhone} />
          </button>
          <button className="text-white text-xs ml-4 ">+1 123 456 789</button>
          <p className="text-slate-500 ml-8 ">|</p>
          <button className=" text-white text-md  ml-8  mr-2 ">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button className="text-white text-xs ml-4 ">info@company.com</button>
        </div>
        <div className="flex flex-row justify-around space-x-7">
          <button className="text-white">
            <FaFacebookF />
          </button>
          <button className="text-white">
            <BsInstagram />
          </button>
          <button className="text-white">
            <BsTwitter />
          </button>
          <button className="text-white">
            <GrLinkedinOption />
          </button>
          <button className="text-white">
            <ImBehance />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
