import React from "react";
import { TiWorld } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="   w-full md:w-7/12 flex  flex-col md:flex-row  justify-center items-center sm:items-start sm:justify-between  mx-auto mt-10 ">
      <div className="flex flex-col justify-center items-center  sm:justify-start sm:items-start ">
        <h1 className="hover:text-green-500 font-bold transition-all    ">
          INFORMATION
        </h1>
        <div className="flex flex-col sm:mt-5  justify-center items-center  sm:justify-start sm:items-start ">
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500  transition-all ">
            Delivery Information
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500  transition-all ">
            Discount
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500  transition-all ">
            Sitemap
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500  transition-all ">
            Privacy Policy
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500  transition-all ">
            My Account
          </p>
        </div>
      </div>
      <div className="sm:mt-0  mt-10 flex flex-col justify-center items-center  sm:justify-start sm:items-start ">
        <h1 className="hover:text-green-500 font-semibold transition-all">
          {" "}
          MY ACCOUNT
        </h1>
        <div className=" flex flex-col mt-2 sm:mt-5   justify-center items-center  sm:justify-start sm:items-start">
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all  ">
            Sıgn In
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all  ">
            View Cart
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all  ">
            My Wishlist
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all  ">
            Check out
          </p>
          <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all  ">
            Track My Order
          </p>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center  sm:justify-start sm:items-start  mt-10 sm:mt-0 ">
        <h1 className="hover:text-green-500 font-semibold  transition-all">
          HELP
        </h1>
        <div className="flex flex-col  mt-2 sm:mt-5  justify-center items-center  sm:justify-start sm:items-start">
          <div>
            <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all">
              F.A.Q.
            </p>
            <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all">
              Shipping
            </p>
            <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all">
              Contact Us
            </p>
            <p className="sm:mt-2 sm:font-semibold hover:text-green-500 transition-all">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center  sm:justify-start sm:items-start   mt-10 sm:mt-0">
        <div>
          <h1 className="hover:text-green-500 font-semibold transition-all">
            CONTACT INFO
          </h1>
        </div>
        <div className="flex  flex-row sm:mt-5 space-x-1 justify-center items-center  sm:justify-start sm:items-start mt-2 ">
          <div className="flex justify-center items-center" >
            <span  className="flex self-center mt-1 ">
            <TiWorld />
            </span>
          </div>
          <div className="flex justify-start items-center  sm:mt-0  mt-2  space-x-1">
            <p className="text-xs font-semibold  mt-1 hover:text-green-500 transition-all">
              1234 Your Address,Country aa
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center sm:mt-5  mt-2  space-x-1 ">
          <button className=" mt-1">
            <TiWorld />
          </button>
          <p className="text-xs font-semibold  mt-3 hover:text-green-500 transition-all">
            {" "}
            1234 Your Address,Country
          </p>
        </div>
        <div className="flex justify-start items-center sm:mt-5  mt-2   space-x-1">
          <button className="mt-1">
            <TiWorld />
          </button>
          <p className="text-xs font-semibold  mt-3 hover:text-green-500 transition-all">
            1234 Your Address,Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="flex flex-col  justify-center items-center  sm:justify-start sm:items-start  mt-10 sm:mt-0">
<h1 className="hover:text-green-500 font-semibold transition-all">CONTACT INFO</h1>
<div className="flex  sm:mt-5 space-x-1 justify-center items-center  sm:justify-start sm:items-start mt-2 ">
  <button className="mt-1">
    <TiWorld />
  </button>
  <p className="text-xs font-semibold  mt-1 hover:text-green-500 transition-all">
   
    1234 Your Address,Country
  </p>
</div>
<div className="flex justify-start items-center sm:mt-5  mt-2  space-x-1 ">
  <button className="mt-1">
    <TiWorld />
  </button>
  <p className="text-xs font-semibold  mt-3 hover:text-green-500 transition-all">
    {" "}
    1234 Your Address,Country
  </p>
</div>
<div className="flex justify-start items-center sm:mt-5  mt-2   space-x-1">
  <button className="mt-1">
    <TiWorld />
  </button>
  <p className="text-xs font-semibold  mt-3 hover:text-green-500 transition-all">
    1234 Your Address,Country
  </p>
</div>
</div> */
}
