import React, { useState, useRef } from "react";
import Success from "../Success";
import Error from "../Error";

export default function NewSignUpFormInputs({check, loader, isSuccess, isError}) {
  const [viewPassword, setViewPassword] = useState(true);
  const numberInput = useRef(null);

  let setPasswordView = () => {
    setViewPassword(!viewPassword);
    viewPassword == true
      ? (numberInput.current.type = "text")
      : (numberInput.current.type = "password");
  };


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      const phone = e.target.phone.value;
      check(email, phone, password)
      }}
      className="px-4 py-3 pb-8 flex flex-col gap-[1.3rem] mb-8 md:mb-0">
      <div className="border border-grayClr flex items-center space-x-3 py-2 px-3 rounded-md">
        <i className="bi bi-envelope-fill text-grayClr"></i>
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="outline-none w-full"
        />
      </div>
      <div className="border border-grayClr flex items-center space-x-3 py-2 px-3 rounded-md">
        <i className="bi bi-telephone-fill text-grayClr"></i>
        <input
          type="number"
          name="phone"
          placeholder="Your Phone"
          className="outline-none w-full"
        />
      </div>
      <div className="border border-grayClr py-2 px-3 rounded-md">
        <div className="flex items-center space-x-3 w-full">
          <i className="bi bi-lock-fill text-grayClr"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="outline-none w-full"
            ref={numberInput}
          />
          <div className="flex justify-end">
            {viewPassword ? (
              <i
                className="bi bi-eye text-grayClr"
                onClick={setPasswordView}></i>
            ) : (
              <i
                className="bi bi-eye-slash-fill text-grayClr"
                onClick={setPasswordView}></i>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-3 items-center ">
        <input type="checkbox" required className="" />
        <small>I agree to the Terms & Conditiion</small>
      </div>
        <button
        type="submit"
        className="bg-themePurple text-white p-2 rounded-md hover:cursor-pointer"
      >
        {
          loader ? <p>Loading...</p> :<p>Next</p> 
        }
        {
          isSuccess && <Success title="Account creation success!" message="You have successfully created your account, you will be redirected soon 😁" />
        }
        {
          isError && <Error title="Account creation failed" message="Invalid credentials. Please try again 🥲" />
        }
      </button>
    </form>
  );
}

// export default NewSignUpFormInputs;
