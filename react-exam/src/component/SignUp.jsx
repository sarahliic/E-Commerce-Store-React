import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const nav = useNavigate();
  const api_url = `https://fakestoreapi.com/users`;

  useEffect(() => {
    userApi();
  }, []);

  const userApi = () => {
    axios
      .get(`${api_url}`)
      .then((res) => {
        console.log(res.data);
        if (
          form.username !== res.data.username ||
          form.email !== res.data.email ||
          form.password !== res.data.password
        ) {
          setMessage("Must be same in Api");
        } else {
          console.log("correct Account");
          nav("/Login");
        }
      })
      .catch((err) => {
        console.log("there is error: " + err);
      });
  };

  //handle form
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit
  const handleSubmit = () => {
    if (
      form.username === "" ||
      form.email === "" ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      setMessage("Please fill all Failds");
    } else {
      if (form.username.length < 3) {
        setMessage("invalid username");
      }
      if (!form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setMessage("invalid Email");
      }
      if (
        !form.password.match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/
        )
      ) {
        setMessage("invalid Password");
      }
      if (form.confirmPassword !== form.password) {
        setMessage("Passwords Not Match");
      } else {
        userApi();
      }
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt="logo"
          width={150}
        />
      </div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Create Account</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="User Name"
              value={form.username}
              onChange={handleForm}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleForm}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleForm}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleForm}
            />
            {message && <p className="text-red-700 ">{message}</p>}
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-[#F7CA00] text-black hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSubmit}
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
