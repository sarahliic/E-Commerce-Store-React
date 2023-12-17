import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  //useEffect
  useEffect(() => {
    getApi();
  }, []);

  //api
  const getApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("there is error: " + err);
      });
  };
  return (
    <>
      <div className="min-h-screen w-full max-sm:w-full ">
        {/* NavBar */}
        <div>
          <NavBar />
        </div>
        {/* catagories */}

        {/* carousel images */}
        <div className="relative">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          {/* Shope cart */}
          <div className="flex justify-center items-center flex-wrap gap-20 ">
            {products.map((item) => (
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>Price: ${item.price}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/ViewDetails/${item.id}`}>
                      {" "}
                      <button className="mt-6 w-full rounded-md bg-[#00453E] p-4 font-medium text-blue-50 hover:bg-[#00453E]">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
