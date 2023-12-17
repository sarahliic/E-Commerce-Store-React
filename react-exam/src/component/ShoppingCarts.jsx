import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function ShoppingCarts() {
  const [showCart, setShowCart] = useState();
  const [chekItem, setCheckItem] = useState([]);
  // useEffect
  useEffect(() => {
    getApi();
  }, []);

  //api
  const getApi = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setCheckItem(JSON.parse(localStorage.getItem("cart")));
      })
      .catch((err) => {
        console.log("there is error: " + err);
      });
  };

  //useEffect
  //   useEffect(() => {
  //     getApi();
  //   }, []);

  //   //api
  //   const getApi = () => {
  //     axios
  //       .get(`https://fakestoreapi.com/products/${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         setViewProduct(res.data);
  //       })
  //       .catch((err) => {
  //         console.log("there is error: " + err);
  //       });
  //   };
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <body>
        <div class="h-screen bg-gray-100 pt-20">
          <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={chekItem.image}
                  alt="product-image"
                  class="w-full rounded-lg sm:w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      Nike Air Max 2019
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value="2"
                        min="1"
                      />
                      <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">${chekItem.price}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={chekItem.image}
                  alt="product-image"
                  class="w-full rounded-lg sm:w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {chekItem.title}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">
                      {chekItem.catagory}
                    </p>
                  </div>
                  <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value="2"
                        min="1"
                      />
                      <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">${chekItem.price}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sub total --> */}
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">${chekItem.price}</p>
              </div>

              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">${chekItem.price}</p>
                </div>
              </div>
              <Link to="/Checkout">
                {" "}
                <button class="mt-6 w-full rounded-md bg-[#00453E] py-1.5 font-medium text-blue-50 hover:bg-[#00453E]">
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </body>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ShoppingCarts;
