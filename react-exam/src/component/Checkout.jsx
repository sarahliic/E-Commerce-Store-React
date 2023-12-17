import NavBar from "./NavBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Checkout() {
  const [checkouform, setcheckoutform] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    card: "",
  });
  const [message, setMessage] = useState("");
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

  //handleChange
  const handleChange = (e) => {
    setcheckoutform({
      ...checkouform,
      [e.target.name]: e.target.value,
    });
  };

  //handleSubmit

  const handleSubmit = () => {
    if (
      checkouform.name == "" ||
      checkouform.email == "" ||
      checkouform.city == "" ||
      checkouform.card == "" ||
      checkouform.address == ""
    ) {
      setMessage("Please Fill all Fields");
    } else {
      nav("/");
    }
  };
  return (
    <div>
      <header className="flex flex-wrap">
        <NavBar />
      </header>
      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 sm:w-5 h-6 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer"></div>
          </div>
          <div className="rounded-md">
            <form id="payment-form">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping & Billing Information
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Name</span>
                    <input
                      name="name"
                      value={checkouform.name}
                      onChange={handleChange}
                      className="focus:outline-none px-3"
                      placeholder="Try Sarah.."
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="focus:outline-none px-3"
                      placeholder="try@example.com"
                      required
                      value={checkouform.email}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Address</span>
                    <input
                      name="address"
                      className="focus:outline-none px-3"
                      placeholder="10 Street XYZ 654"
                      value={checkouform.address}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">City</span>
                    <input
                      name="city"
                      className="focus:outline-none px-3"
                      placeholder="Ryiadh"
                      value={checkouform.city}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                    <span className="text-right px-2 xl:px-0 xl:text-none">
                      ZIP
                    </span>
                    <input
                      name="zip"
                      className="focus:outline-none px-3"
                      placeholder="98603"
                      value={checkouform.zip}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                    <span className="text-right px-2">Country</span>
                    <div
                      id="country"
                      className="focus:outline-none px-3 w-full flex items-center"
                    >
                      <select
                        name="country"
                        className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                      >
                        <option value="DM">KSA</option>
                        <option value="KH">US</option>
                        <option value="ME">Korea</option>
                        <option value="JE">UK</option>

                        <option value="US" selected="selected">
                          KSA
                        </option>
                      </select>
                    </div>
                  </label>
                </fieldset>
              </section>
            </form>
          </div>
          <div className="rounded-md">
            <section>
              <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                Payment Information
              </h2>
              <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Card</span>
                  <input
                    name="card"
                    className="focus:outline-none px-3 w-full"
                    placeholder="Card number MM/YY CVC"
                    required
                    value={checkouform.card}
                    onChange={handleChange}
                  />
                </label>
              </fieldset>
            </section>
          </div>
          {message && <p className="text-red-700">{message}</p>}
          <button
            className="submit-button px-4 py-3 rounded-full bg-[#00453E] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            onClick={handleSubmit}
          >
            Place Order
          </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>
          <ul className="py-6 border-b space-y-6 px-8">
            <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src={chekItem.image}
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  {chekItem.title}
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">2 x €30.99</span>
                  <span className="text-[#00453E] font-semibold inline-block">
                    {chekItem.price}
                  </span>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src={chekItem.image}
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  {chekItem.title}
                </span>
                <span className="text-gray-400 text-sm inline-block pt-2"></span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">1 x €785</span>
                  <span className="text-[#00453E] font-semibold inline-block">
                    {chekItem.price}
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-[#00453E]">
                {chekItem.price}
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-[#00453E]">Free</span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>{chekItem.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
