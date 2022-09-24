import React, { useEffect, useState } from "react";
import DetailPages from "./DetailPages";
import BreadCrumb from "../components/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedItem } from "../redux/product/productSlice";
import { useParams } from "react-router-dom";
import { Tabs } from "antd";
import { Rate } from "antd";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { getProductsAsync } from "../redux/product/productSlice";
const { TabPane } = Tabs;

const DetailPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getProductsAsync())
  },[dispatch])


  const items = useSelector((item) => item.product.items);
  //PAGINTAION
  const perPage = 4;
  const pagecount = Math.ceil(items.length / perPage);
  const [pages, setPages] = useState(0);
  const decrease = () => {
    if (pages > 0) {
      setPages(pages - 1);
    }
  };

  const increase = () => {
    if (pages < pagecount - 1) {
      setPages(pages + 1);
    }
  };

  const onChange = (key) => {
    console.log(key);
  };


  let { id } = useParams();

  useEffect(() => {
    dispatch(setSelectedItem(id));
  }, [1]);

  const selectItem = useSelector((state) => state.product.selectedItem);
  const counterProduct = useSelector((state) => state.product.counter);

  console.log(selectItem);
  if (selectItem)
    return (
      <>
        <BreadCrumb id={id} />
        <div className="flex flex-col  w-7/12  mt-10 mx-auto">
          <div className="flex flex-col justify-center items-center space-x-20 sm:flex-row  w-full mx-auto ">
            <DetailPages
              counterProduct={counterProduct}
              selectItem={selectItem}
            />
          </div>
          <div className="w-full flex  mt-16 ">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="Description" key="1">
                {selectItem.description}
              </TabPane>
              <TabPane tab={`Reviews (${selectItem.reviews.length})`} key="2">
                {selectItem.reviews.map((item) => (
                  <p>{item}</p>
                ))}
              </TabPane>
            </Tabs>
          </div>

          <div className="flex flex-col w-full  mx-auto flex-wrap mt-10  ">
            <div className="flex flex-row justify-between  ">
              <p className="text-xl font-semibold">Related Products</p>
              <div className="flex flex-row  space-x-3  ">
                <button className="text-xl" onClick={() => decrease()}>
                  <BsFillArrowLeftSquareFill />
                </button>
                <button className="text-xl" onClick={() => increase()}>
                  <BsFillArrowRightSquareFill />
                </button>
              </div>
            </div>
            <div className="flex flex-row w-full flex-wrap mx-auto    ">
              {items
                .slice(pages * perPage, pages * perPage + perPage)
                .map((item) => (
                  <div className="flex flex-col w-1/4   ">
                    <img
                      className="w-[270px] h-[400px] object-contain "
                      src={item.image}
                      alt=""
                    />
                    <p> {item.name} </p>
                    <p> {item.price} </p>
                    <span>
                      <Rate
                        className="text-xs"
                        disabled
                        defaultValue={item.rates}
                      />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default DetailPage;
