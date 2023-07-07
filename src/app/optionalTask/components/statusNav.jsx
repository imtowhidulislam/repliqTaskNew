import CartContextProvider from "@/app/context/cartContext";
import React, { useContext, useEffect, useState } from "react";

const StatusNav = () => {
  const { status } = useContext(CartContextProvider);
  const localTaskData = localStorage.getItem("taskData");
  const [taskData, setTaskData] = useState(JSON.parse(localTaskData));
  const [statusBtn, setStatusBtn] = useState([]);
  const [filterProduct, setFilterProduct] = status;

  const [selectedOption, setSelectedOption] = useState("");

  const fetchButon = () => {
    let unique = [...new Set(taskData?.map((item) => item.status))];
    setStatusBtn(unique);
  };

  //   ?? Handle Click Function..
  const handleClick = (e) => {
    setFilterProduct(e.target.dataset.name);
    localStorage.setItem("statusBtn", e.target.dataset.name);
  };
  const handleOptionChange = (e) => {
    setFilterProduct(e.target.value);
  };

  useEffect(() => {
    fetchButon();
  }, []);

  console.log(filterProduct);
  return (
    <div className="mb-12">
      <div className="hidden md:block">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {statusBtn.map((btns, i) => {
                return (
                  <>
                    <button
                      key={i}
                      className={
                        filterProduct === btns
                          ? "bg-lime-200 py-2 px-8 cursor-pointer capitalize border-transparent hover:border-gray-400 transition-all ease-in-out duration-200 border-2"
                          : "py-2 px-8 cursor-pointer capitalize border-transparent hover:border-gray-400 transition-all ease-in-out duration-200 border-2"
                      }
                      onClick={handleClick}
                      data-name={btns}
                    >
                      {btns}
                    </button>
                  </>
                );
              })}
        </div>
      </div>

      {/* Button For Mobile Navigation */}
      <div className="md:hidden">
        <select
          className="w-full max-w-xs rounded-md border border-gray-300 px-4 py-3 capitalize focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option className="capitalize" value={filterProduct}>
            {statusBtn ? `${filterProduct}` : "choose an option"}
          </option>
          {statusBtn.map((btns, i) => {
            return (
              <>
                <option
                  className={
                    filterProduct === btns
                      ? "bg-lime-300 py-2 capitalize"
                      : "capitalize py-2"
                  }
                  key={i}
                  value={btns}
                >
                  {btns}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default StatusNav;
