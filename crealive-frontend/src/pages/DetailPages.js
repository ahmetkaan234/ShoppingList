import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cardItems } from "../redux/product/productSlice";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Image } from "antd";
import { Rate } from "antd";
import { Select } from "antd";
import Slider from "react-slick";
import { Button, notification } from "antd";

const DetailPages = ({ selectItem }) => {
  const [addSize, setAddSize] =useState("");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { Option } = Select;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const addToShoppingList = () => {
    const item = { ...selectItem, quantity, addSize };
    dispatch(cardItems(item));
  };

  const quantityMinor = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const quantityPlus = () => {
    setQuantity(quantity + 1);
  };

  const openNotification = () => {
    notification.open({
      message: "Add To Shopping List",
      description: "Your Product Has Been Added",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const handleChange = (value) => {
    console.log(`${value}`);
    setAddSize(value);
  };
  

  if (selectItem)
    return (
      <>
        <div className="flex flex-col w-full sm:w-1/2 ">
          <div className="flex w-full mt-16 sm:mt-0  ">
            <Image
              className="object-contain  w-[450px] h-[600px]"
              src={selectItem.image}
            />
          </div>
          <div className="w-full ">
            <div className="w-full mt-10 ">
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    className="h-[100px] w-full object-contain "
                    src={selectItem.image}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-[100px] w-full object-contain "
                    src={selectItem.image}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-[100px] w-full object-contain "
                    src={selectItem.image}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="flex  flex-col  mt-10 sm:mt-0  w-full md:w-1/2 ">
          <h1 className=" text-xl sm:text-2xl font-semibold w-full  ">
            {selectItem.name}
          </h1>
          <div className=" flex flex-row items-center  w-full mt-10 sm:mt-0 space-x-10  ">
            <div className="w-1/2">
              <p className="mt-5  text-green-500 text-xl  ">
                {selectItem.price}
              </p>
            </div>
            <div className="w-1/2">
              <Rate
                className="text-xs"
                disabled
                defaultValue={selectItem.rates}
              />
            </div>
          </div>
          <div className="font-semibold mt-10 sm:mt-0 ">
            {selectItem.description}
          </div>
          <div className="w-full mt-10  ">
            <Select
              onSelect={handleChange}
              className="font-semibold w-1/2 "
              placeholder="select size"
            >
              {selectItem.size.map((item) => (
                <Option value={`${item}`}> {item} </Option>
              ))}
            </Select>
          </div>
          <div className="flex flex-row w-6/12 justify-around items-center border mt-10 rounded-md border-gray-300">
            <button
              className=" text-black font-bold"
              onClick={() => quantityMinor()}
            >
              <AiOutlineMinus />
            </button>
            <p className=" mt-3 text-lg font-semibold ">{quantity}</p>
            <button
              className="text-lg text-black font-bold"
              onClick={() => quantityPlus()}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="">
            <Button
              size="large"
              style={{ textAlign: "center", color: "" }}
              onClick={() => `${addToShoppingList()}  ${openNotification()}  `}
              className=" flex flex-row  mt-10 justify-center items-center  text-center rounded-sm text-white space-x-2 bg-green-500"
            >
              <span>
                <FaShoppingCart className="" />
              </span>
              <span>ADD TO CART</span>
            </Button>
          </div>
        </div>
      </>
    );
};

export default DetailPages;
