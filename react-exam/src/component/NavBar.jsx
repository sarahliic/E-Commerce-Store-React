import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  return (
    <div>
      <div className="navbar bg-[#00453E] text-white">
        <div className="flex-1">
          <Link to="/">
            <img
              src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
              className="btn btn-ghost text-xl"
            ></img>
          </Link>
          <h2>
            Delivered <br /> <span>to Saudi Arabia</span>
          </h2>
        </div>
        <div className="flex">
          <input
            type="search"
            placeholder="search.."
            className="w-[40rem] p-1 rounded-md"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
            alt="search-icon"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            width={50}
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Lang</a>
            </li>
            <li>
              <a>
                Hello{" "}
                <Link to="/SignUp">
                  <span>Sign Up</span>
                </Link>
              </a>
            </li>
            <li>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                  alt="img"
                  width={30}
                />{" "}
                <Link to="/ShoppingCarts">
                  {" "}
                  <span>Cart</span>{" "}
                </Link>
              </a>
            </li>
            <li>
              {/* <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details> */}
            </li>
          </ul>
        </div>
      </div>
      {/* catagories */}
      <div>
        <div className="navbar bg-[#195851] text-white h-1">
          <div className="flex-1 ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>All</a>
              </li>
              <li>
                <a>Today's Deals</a>
              </li>
              <li>
                <a>Registry</a>
              </li>
              <li>
                <a>Custmoer Service</a>
              </li>
              <li>
                <a>Gifts Cards</a>
              </li>
              <li>
                <a>Sell</a>
              </li>
            </ul>
          </div>

          <div className="flex-none">
            <ul className="menu menu-horizontal px-1"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
