import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { removeItems } from "../redux/product/productSlice";
import { setShoppingListItemQA } from "../redux/product/productSlice";
import { message } from "antd";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const ShoppingItems = useSelector((state) => state.product.shoppingList);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    var toplam = 0;
    for (let i = 0; i < ShoppingItems.length; i++) {
      toplam =
        toplam +
        Number(ShoppingItems[i].price.replace("$", "")) *
          ShoppingItems[i].quantity;
    }

    setSubtotal(toplam);
  }, [ShoppingItems]);

  const info = () => {
    message.info("This is a normal message");
  };

  return (
    <div className="flex flex-col  justify-between items-center w-full h-full mx-auto">
      <div className="flex flex-row items-center h-1/6 space-x-3 text-2xl">
        <FaShoppingCart />
        <span className="font-semibold">CART</span>
      </div>
      <div className="  flex flex-col overflow-auto  w-full justify-start items-start h-4/6   ">
        {ShoppingItems.map((item, key) => (
          <div
            key={key}
            className="w-full  flex justify-start mt-4 items-start    "
          >
            <div className="w-5/12 p-4 border border-gray-300 rounded-md ">
              <img
                className="w-12/12 object-contain  "
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col w-5/12 items-start ml-6">
              <p className="font-semibold">{item.name}</p>
              <p className="font-semibold text-lg"> {item.quantity} </p>
              <p className="font-semibold text-lg"> {item.addSize} </p>
            </div>
            <div className="flex flex-col  w-4/12 h-full justify-between items-end">
              <button
                className="text-xl font-semibold  "
                onClick={() => dispatch(removeItems(item.id))}
              >
                X
              </button>
              <p> {item.price} </p>
              <div className="flex flex-row space-x-2">
                <button
                  className="text-xl font-semibold  "
                  onClick={() =>
                    dispatch(
                      setShoppingListItemQA({ id: item.id, type: "minus" })
                    )
                  }
                >
                  -
                </button>
                <button
                  className="text-xl font-semibold  "
                  onClick={() =>
                    dispatch(
                      setShoppingListItemQA({ id: item.id, type: "plus" })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col w-full h-2/6 mt-2">
        <div className="flex flex-row justify-between">
          <p className="text-lg font-semibold">SUBTOTAL</p>
          <p> {Number(subtotal.toFixed(2))} </p>
        </div>
        <div className="flex  justify-center w-full mt-10   ">
          <button className="w-6/12 p-3 rounded-sm text-white bg-black font-semibold">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
