import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import CartContextProvider from "@/app/context/cartContext";
import MobileCart from "./mobileCart";

const StatusCart = () => {
  const { status } = useContext(CartContextProvider);
  const taskData = localStorage.getItem("taskData");
  const [data, setData] = useState(JSON.parse(taskData));
  const [filterStatusbtn, setFilterStatusBtn] = status;
  const [filterProductData, setFilterProductData] = useState([]);

  const filterCategory = () => {
    const fetchFilterProduct = data.filter((product) => {
      return product.status === filterStatusbtn;
    });
    setFilterProductData(fetchFilterProduct);
  };
  useEffect(() => {
    filterCategory();
  }, [filterStatusbtn]);

  console.log(filterStatusbtn);
  console.log(filterProductData);

  return (
    <div className="">
      <div className="hidden md:block w-full">
        <table className="container w-full table-auto border-separate">
          <thead className="mb-1">
            <tr className="border-2 border-red-400">
              <th className="border border-gray-400 p-4 capitalize">ID</th>
              <th className="border border-gray-400 p-4 capitalize">Name</th>
              <th className="border border-gray-400 p-4 capitalize">
                Category
              </th>
              <th className="border border-gray-400 p-4 capitalize">Price</th>
              <th className="border border-gray-400 p-4 capitalize">Status</th>
              <th className="border border-gray-400 p-4 capitalize">Image</th>
            </tr>
          </thead>
          <tbody>
            {filterProductData.map((item) => {
              const { id, name, category, status, price, image } = item;

              return (
                <tr key={id} className="">
                  <td className="border border-gray-400 p-2 text-center capitalize">
                    {id}
                  </td>
                  <td className="border border-gray-400 p-2 text-center capitalize">
                    {name}
                  </td>
                  <td className="border border-gray-400 p-2 text-center capitalize">
                    {category}
                  </td>
                  <td className="border border-gray-400 p-2 text-center capitalize">
                    {price}
                  </td>
                  <td className="border border-gray-400 p-2 text-center font-bold capitalize">
                    {status}
                  </td>
                  <td className="grid place-items-center border border-gray-400 p-2 text-center">
                    <div className="grid w-32 place-items-center">
                      <Image
                        className="aspect-square object-cover object-center"
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="md:hidden ">
        <MobileCart filterProductData={filterProductData} />
      </div>
    </div>
  );
};

export default StatusCart;
