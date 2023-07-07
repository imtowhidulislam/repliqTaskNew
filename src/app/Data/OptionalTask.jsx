import React from "react";
import ProductOne from "../../../public/amazonSpeaker.jpg";
import ProductEight from "../../../public/applewatch.jpg";
import ProductTwo from "../../../public/appleWatch6.jpg";
import ProductThree from "../../../public/camera.jpg";
import ProductFour from "../../../public/cocacola.jpg";
import ProductFive from "../../../public/dslr.jpg";
import ProductSix from "../../../public/pepsi.jpg";
import ProductSeven from "../../../public/plant.jpg";
import ProductNine from "../../../public/shose.jpg";
import ProductTen from "../../../public/watch.jpg";

export const OptionalTaskData = [
  {
    id: 1,
    image: ProductOne,
    name: "amazon speaker",
    price: 20,
    category: "Electronics",
    status: "new arrival",
  },
  {
    id: 2,
    image: ProductTwo,
    name: "apple watch 6",
    price: 200,
    category: "Electronics",
    status: "new arrival",
  },
  {
    id: 3,
    image: ProductThree,
    name: "camera",
    price: 500,
    category: "Electronics",
    status: "out of stock",
  },
  {
    id: 4,
    image: ProductFour,
    name: "cocacola",
    price: 500,
    category: "beVarage",
    status: "summer sale",
  },
  {
    id: 5,
    image: ProductFive,
    name: "dslr",
    price: 600,
    category: "Electronics",
    status: "sold",
  },
  {
    id: 6,
    image: ProductSix,
    name: "pepsi",
    price: 7,
    category: "beVarage",
    status: "summer sale",
  },
  {
    id: 7,
    image: ProductSeven,
    name: "plant",
    price: 10,
    category: "plant",
    status: "out of stock",
  },
  {
    id: 8,
    image: ProductEight,
    name: "apple watch",
    price: 800,
    category: "watch",
    status: "upcomming",
  },
  {
    id: 9,
    image: ProductNine,
    name: "nike",
    price: 230,
    category: "shose",
    status: "sold",
  },
  {
    id: 10,
    image: ProductTen,
    name: "apple watch 4",
    price: 300,
    category: "watch",
    status: "new arrival",
  },
];

localStorage.setItem("taskData", JSON.stringify(OptionalTaskData));
