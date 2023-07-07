"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { RiH2 } from "react-icons/ri";
import ImageOne from "../../public/imageOne.svg";
// import ImageTwo from "../..public/imageTwo.svg"
import Link from "next/link";
import TopratedProduct from "./components/TopratedProduct";
import { useQuery } from "@tanstack/react-query";
import Subscribe from "./components/Subscribe";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import CartContextProvider from "./context/cartContext";
import { useProductData } from "./Data/productData";
import StatusNav from "./components/statusNav";
import StatusCart from "./components/statusCart";

export default function Home() {
  const { data, isLoading, error: error } = useProductData();
  const { cart } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [product, setProduct] = useState([]);

  return (
    <>
      <div className="mt-40 py-20 md:py-8 md:mt-0 min-h-custom-h-form container">
        <StatusNav />
        <StatusCart />
      </div>
    </>
  );
}
