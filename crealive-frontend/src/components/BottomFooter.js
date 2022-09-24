import React from "react";
import { FaCcVisa } from "react-icons/fa";
import {FaCcPaypal} from "react-icons/fa"
import {AiFillAmazonSquare} from "react-icons/ai"
import {FaCcMastercard} from "react-icons/fa"
import {FaCcAmex} from "react-icons/fa" 

const BottomFooter = () => {
  return (
    <div className="w-full bg-black flex flex-row justify-center items-center  sm:mt-20   ">
      <div className=" flex flex-row  justify-between container w-full ">
        <div className="flex flex-row items-center">
          <p className="text-gray-500 font-semibold  ml-4 sm:ml-0 ">Crealive</p>
        </div>
        <div className="flex flex-row items-center  space-x-2 sm:space-x-4 transition-all duration-700  ">
          <button className="text-gray-500  text-5xl" >
            <FaCcVisa />
          </button>
          <button className="text-gray-500  text-5xl" >
            <FaCcPaypal />
          </button>
          <button className="text-gray-500  text-5xl" >
            <AiFillAmazonSquare />
          </button>
          <button className="text-gray-500  text-5xl" >
            <FaCcMastercard />
          </button>
          <button className="text-gray-500  text-5xl" >
            <FaCcAmex />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
