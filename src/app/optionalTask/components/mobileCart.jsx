import Image from "next/image";
import React from "react";

const MobileCart = ({ filterProductData }) => {
  console.log(filterProductData);
  return (
    <div className="grid grid-cols-productLayout gap-4">
      {filterProductData.length > 0 ? (
        filterProductData.map((item) => {
          const { id, name, price, category, image, status } = item;
          return (
            <div key={id} className="p-4 rounded-md drop-shadow-md border-2 border-gray-400 max-w-xs">
              <div className="grid grid-cols-userLayout gap-4 ">
                <div className="">
                  <p className="capitalize text-xl font-bold">{name}</p>
                  <p className="mt-2 capitalize text-sm">category</p>
                  <p className="capitalize text-xl text-blue-600 font-bold mt-5">$ {price}</p>
                </div>
                <div className="rounded-md overflow-hidden">
                  <Image className="object-cover aspect-square object-center" src={image} alt={name} width={150} height={150} />
                </div>
              </div>
              <div className="w-full mt-6">
                <p className="capitalize text-base font-bold text-center py-2 rounded-full cursor-pointer bg-gray-300">{status}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div >
          <h2>Select Option First</h2>
        </div>
      )}
    </div>
  );
};

export default MobileCart;
