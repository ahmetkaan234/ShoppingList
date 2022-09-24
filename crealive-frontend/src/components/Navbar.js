import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { Button, Drawer } from "antd";
import ShoppingList from "./ShoppingList";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="flex  flex-col sm:flex-row shadow-md w-full justify-between items-center  mx-auto  mt-8">
      <Link
        to={"/"}
        className="flex flex-row justify-start items-center     w-2/12  mx-auto"
      >
        <div className="mt-4" >
          <p className="text-2xl xl:text-3xl font-semibold   text-green-500">
           COMPANY
          </p>
        </div>
      </Link>
      <div className="   mt-5 sm:mt-0 flex flex-row justify-evenly space-x-3   items-center mx-auto sm:w-4/12 w-full transition-all duration-700  ">
        <div>
          <button className="xl:text-xl md:text-lg  sm:text-sm  text-xs font-semibold hover:text-green-500 transition-all ">
            HOME
          </button>
        </div>
        <div>
          <button className="xl:text-xl md:text-lg  sm:text-sm  text-xs font-semibold hover:text-green-500 transition-all  ">
            WOMEN
          </button>
        </div>
        <div>
          <button className="xl:text-xl md:text-lg  sm:text-sm  text-xs font-semibold hover:text-green-500 transition-all  ">
            MEN
          </button>
        </div>
        <div>
          <button className="xl:text-xl md:text-lg  sm:text-sm   text-xs font-semibold hover:text-green-500 transition-all ">
            KIDS
          </button>
        </div>

        <div>
          <button className="xl:text-xl md:text-lg  sm:text-sm  text-xs font-semibold hover:text-green-500  transition-all ">
            JEWELLERY
          </button>
        </div>
        <div>
          <button className="xl:text-xl md:text-lg  sm:text-sm  text-xs font-semibold hover:text-green-500  transition-all ">
            ACCESSORIES
          </button>
        </div>
      </div>
      <div className=" mt-5 sm:mt-0  flex flex-row  w-3/4 sm:w-2/12 mx-auto  justify-evenly items-end">
        <button className="align-middle sm:text-sm md:text-lg xl:text-lg">
          <div className="flex justify-center items-center ">
            <Button
              type="text"
              className=" hover:text-green-500 "
              onClick={showDrawer}
            >
              <FaShoppingCart />
            </Button>

            <Drawer
              title="Shopping List"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <ShoppingList />
            </Drawer>
          </div>
        </button>
        <div>
        <button className=" sm:text-sm md:text-lg xl:text-lg">
          <BiSearch />
        </button>
        </div>
        <div>
        <button className=" sm:text-sm md:text-lg xl:text-lg">
          <GoThreeBars />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
