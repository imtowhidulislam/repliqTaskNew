"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import SearchButton from "../SearchButton";
import CartContextProvider from "@/app/context/cartContext";
import { usePathname } from "next/navigation";

const NavbarMain = ({ params }) => {
  const currentPath = usePathname();
  const { cart } = useContext(CartContextProvider);
  const [cartItem, setCartItem] = cart;
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(window?.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calcSize = () => {
        setWidth(window.innerWidth);
      };

      setToggleNav(true);
      window.addEventListener("resize", calcSize);
      return () => {
        window.removeEventListener("resize", calcSize);
      };
    }
  }, []);

  // ? Navbar Toggle Functionality...
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };
  const toggleMobNav = () => {
    setToggleNav(true);
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-lime-100 md:relative md:bg-lime-200">
      <div className="container py-4">
        {width > 768 ? (
          <nav className="flex w-full max-w-7xl items-center justify-between gap-2">
            <div>
              <Link href="/">
                <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-700">
                  <span className="text-pink-500">
                    <RiShoppingBagFill className="text-4xl" />
                  </span>
                  repliq
                </h2>
              </Link>
            </div>
            <div className="flexRow gap-2">
              <Link
                className={
                  currentPath === "/"
                    ? "navList navLink text-lime-700"
                    : "navLink navList"
                }
                href="/"
              >
                Additonal Task
              </Link>

            </div>
          </nav>
        ) : (
          <nav className="relative z-20 flex w-full max-w-7xl items-center justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-600">
                <span className="text-lime-600">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div>
            <div className="cursor-pointer" onClick={handleToggle}>
              {toggleNav ? <FaBars /> : <RxCross1 />}
            </div>
            <div
              className={
                toggleNav
                  ? "mobileNav top fixed left-0 z-50 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32"
                  : "mobileNav-active top fixed left-0 z-50 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32 "
              }
            >
              <div className="">
                <div className="mt-4 gap-2">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/"
                        ? "navLink navList text-lime-200"
                        : "navLink navList"
                    }
                    href="/"
                  >
                    Additonal Task
                  </Link>

                  
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavbarMain;
