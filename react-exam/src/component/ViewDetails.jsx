import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ViewDetails() {
  const { id } = useParams();
  const [viewProduct, setViewProduct] = useState(null);
  const [shopeCart, setShopeCart] = useState([]);
  const [alertAdd, setAlertAdd] = useState(false);
  //useEffect
  useEffect(() => {
    getApi();
  }, []);

  //api
  const getApi = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setViewProduct(res.data);
      })
      .catch((err) => {
        console.log("there is error: " + err);
      });
  };

  if (!viewProduct) {
    return <div>loading</div>;
  }

  //handleCart
  const handleCart = (item) => {
    setShopeCart([...shopeCart, item]);
    localStorage.setItem("cart", JSON.stringify(item));
    setAlertAdd(true);
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      {/* ====================== */}
      {/* alrt */}
      {alertAdd && (
        <div role="alert" className="alert alert-success w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Add to Card Successfully.</span>
        </div>
      )}
      {viewProduct ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6">View Details</h1>
            <div className="flex justify-end items-center ">
              <Link to="/">
                {" "}
                <a className="link link-success text-xl">Back to Home</a>{" "}
              </Link>
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={viewProduct.image}
                  alt="Product Image"
                  className="mr-4"
                  width={300}
                />
                <div>
                  <h2 className="font-bold">{viewProduct.title}</h2>
                  <p className="text-gray-700">
                    Category: {viewProduct.category}
                  </p>
                  <p className="text-gray-700">
                    Descriiption: {viewProduct.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-trash"></i>
                </button>
                <div className="mx-4">
                  <input type="number" value="1" className="w-16 text-center" />
                </div>
                <span className="font-bold">${viewProduct.price}</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-center mt-6">
              <button
                className="bg-[#00453E] hover:bg-[#00453E] text-white font-bold py-2 px-4 rounded"
                onClick={() => handleCart(viewProduct)}
              >
                Add to Shopping Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewDetails;
