import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { firstItems } from "../redux/product/productSlice";
import Card from "./Card";
import axios from "axios";
import BreadCrumb from "./BreadCrumb";
import { Pagination } from "antd";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { ImNext2 } from "react-icons/im";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import { setFilteredItems,getProductsAsync } from "../redux/product/productSlice";

const Main = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProductsAsync())
  }, [dispatch]);

  const items = useSelector((state) => state.product.filteredItems);

  const [key, setKey] = useState("");

  useEffect(() => {
    dispatch(setFilteredItems({ type: key }));
  }, [key]);

  const menu = (
    <Menu
      onClick={(e) => setKey(e.key)}
      selectable
      defaultSelectedKeys={["0"]}
      items={[
        {
          key: "1",
          label: "Sort By Name",
        },
        {
          key: "2",
          label: "Sort By Price 0-100",
        },
        {
          key: "3",
          label: "Sort By Price 100 -0",
        },
      ]}
    />
  );

  //PAGINATION
  const perPage = 12;
  const pagecount = Math.ceil(items.length / perPage);
  const [pages, setPages] = useState(0);

  return (
    <>
      <BreadCrumb />
      <div className="flex flex-row md:w-7/12 mx-auto justify-between mt-10 shadow-sm ">
        <p className="text-slate-400 font-semibold">
          {`Showing ${pages * perPage + 1}-${
            perPage * pages + perPage > items.length
              ? items.length
              : perPage * pages + perPage
          } of ${items.length} results `}
        </p>
        <div>
          <Dropdown overlay={menu}>
            <Typography.Link>
              <Space>
                Select Sort
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
      </div>
      <div
        className=" w-full md:w-7/12 mx-auto flex flex-col mt-16 space-y-8 md:space-y-0 md:flex-row  justify-start  items-stretch  
      flex-wrap  "
      >
        {items
          .slice(pages * perPage, pages * perPage + perPage)
          .map((item, key) => (
            <Card item={item} key={key} />
          ))}
      </div>
      <div className="flex flex-row md:w-7/12 mx-auto border-r-0 border-l-0 justify-center border border-gray-200 p-1 mt-10">
        <Pagination
          size="small"
          itemRender={(page, type) => {
            if (type === "prev") {
              return (
                <div className="flex  justify-center    text-xl">
                  <p>
                    <GrFormPreviousLink />
                  </p>
                </div>
              );
            } else if (type === "next") {
              return (
                <div className="flex  justify-center    text-xl ">
                  {" "}
                  <p>
                    {" "}
                    <GrFormNextLink />{" "}
                  </p>{" "}
                </div>
              );
            } else if (type === "jumpt-next") {
              return (
                <div className="flex  justify-center    text-xl ">
                  {" "}
                  <p>
                    {" "}
                    aaa
                    <ImNext2 />{" "}
                  </p>{" "}
                </div>
              );
            } else if (type === "page") {
              return <button className="border-none ">{page}</button>;
            }
          }}
          onChange={(page) => setPages(page - 1)}
          pageSize={perPage}
          defaultCurrent={1}
          total={items.length}
        />
      </div>
    </>
  );
};

export default Main;
