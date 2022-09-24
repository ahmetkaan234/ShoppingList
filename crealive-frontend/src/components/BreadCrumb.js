import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadCrumb = ({ id }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (id) {
      setVisible(true);
    }
  }, []);

  return (
    <div className="flex flex-row w-7/12 justify-start  items-center mx-auto  mt-10">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Page</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Shop</Link>
        </Breadcrumb.Item>

        {visible ? (
          <Breadcrumb.Item>
            <a>Checkout</a>
          </Breadcrumb.Item>
        ) : (
          ""
        )}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
