import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardItems } from "../redux/product/productSlice";

import { Link } from "react-router-dom";
import { Rate } from "antd";

const Card = ({ item, key }) => {
  const dispatch = useDispatch();
  const [addToShopList,setAddToShopList]=useState([])
  const [cardHover, setCardHover] = useState(false);

  const [quantity,setQuantity]= useState(1);
  const [addSize,setAddSize] = useState("S")

  const addToShoppingList = (item) => {
    const items = { ...item, quantity, addSize };
    dispatch(cardItems(items));
  };
  

    
  return (
    <Link
      onMouseMove={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      to={`/${item.id}`}
      key={key}
      className="flex flex-row  mx-auto sm:mx-0 w-6/12  flex-wrap sm:w-6/12 lg:w-3/12    transition-all duration-700 "
    >
      <div className=" flex flex-col border border-gray-400 rounded-md  hover:shadow-xl transition-all duration-200 p-2 m-2 ">
        <img
          className="rounded-lg  object-contain w-[270px] h-[400px]  mb-6   "
          src={item.image}
        />
        <p className="font-semibold  text-gray-500  mb-2 ">
          {item.name.substring(0, 20)}
          {item.name.length > 20 && "..."}
        </p>
        {cardHover ? (
          <div className="flex justify-center ">
            <button
            onClick={()=>addToShoppingList(item)}
            className="bg-green-500 p-3 w-1/2  rounded-md text-white">
              ADD TO CARD
            </button>
          </div>
        ) : (
          <p className="text-green-500"> {item.price} </p>
        )}
        <Rate disabled defaultValue={item.rates} />
      </div>
    </Link>
  );
};

export default Card;
