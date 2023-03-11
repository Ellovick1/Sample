import React, { useState, useRef } from "react";

import "./createForm.css"

const CreateForm = () => {

  const [viewPassword, setViewPassword] = useState(true);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(true);
  const numberInput = useRef(null);
  const confirmPasswordInputRef = useRef(null);


  let setPasswordView = () => {
    setViewPassword(!viewPassword);
    viewPassword == true
      ? (numberInput.current.type = "text")
      : (numberInput.current.type = "password");
  };

  let setConfirmPasswordView = () => {
    setViewConfirmPassword(!viewConfirmPassword);
    viewConfirmPassword == true
      ? (confirmPasswordInputRef.current.type = "text")
      : (confirmPasswordInputRef.current.type = "password");
  };

  return (

    <div class=" mx-auto max-w-screen-xl py-4 p-4">
      <div class="max-w-lg mx-auto">


        <form action="" class="space-y-4">


          <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-4 space-y-2">
            <div class="relative mt-1">
              <input
                type="text"
                maxLength="10"
                id="text"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="First Name"
                required
              />

            </div>

            <div class="relative mt-1">
              <input
                type="text"
                id="text"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Last Name"
                required
              />
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-4 space-y-2">
            <div class="relative mt-1">
              <input
                type="text"
                id="text"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="State"
                required
              />
            </div>
            <div class="relative mt-1">
              <input
                type="text"
                id="text"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Country"
                required
              />
            </div>
          </div>



          <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-4 space-y-2">
            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Email"
                required
              />
              <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            <div class="relative mt-1">
              <input
                type="password"
                id="password"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Password"
                required
                ref={numberInput}
              />
              <span class="absolute inset-y-0 inline-flex items-center right-4">
                <div className="flex justify-end">
                  {viewPassword ? (
                    <i
                      className="bi bi-eye text-grayClr"
                      onClick={setPasswordView}></i>
                  ) : (
                    <i
                      className="bi bi-eye-slash-fill text-grayClr"
                      onClick={setPasswordView}></i>)}        </div>
              </span>
            </div>
          </div>





          <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-themePurple rounded-lg">
            Create Account
          </button>

          <p class="text-sm text-center text-gray-500">
            Have an account?
            <a class="underline" href="">Sign In</a>
          </p>
        </form>
      </div>
    </div>

  )

  // return (
  //   <div className="py-3 pt-[15px] pb-4 flex flex-col gap-[1.3rem] mb-8 md:mb-0">
  //     <div className="border border-grayClr flex items-center space-x-3 py-[5px] px-3 rounded-md mb-2">
  //       <i className="bi bi-envelope-fill text-grayClr"></i>
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="Your Email"
  //         className="outline-none w-full"
  //         value = {user.email}
  //         onChange = {e => setUser({...user,email:e.target.value})}

  //       />
  //     </div>
  //     <div className="border border-grayClr flex items-center space-x-3 py-[5px] px-3 rounded-md mb-2">
  //       <i className="bi bi-telephone-fill text-grayClr"></i>
  //       <input
  //         type="number"
  //         name="number"
  //         placeholder="Your Phone"
  //         className="outline-none w-full"
  //         maxLength="10"
  //         value = {user.number}
  //         onChange = {e => setUser({...user, number:e.target.value})}

  //       />
  //     </div>
  //     <div className="border border-grayClr py-[5px] px-3 rounded-md mb-1">
  //       <div className="flex items-center space-x-3 w-full">
  //         <i className="bi bi-lock-fill text-grayClr"></i>
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           className="number outline-none w-full"
  //           ref={numberInput}

  //         />
  //         <div className="flex justify-end">
  //           {viewPassword ? (
  //             <i
  //               className="bi bi-eye text-grayClr"
  //               onClick={setPasswordView}></i>
  //           ) : (
  //             <i
  //               className="bi bi-eye-slash-fill text-grayClr"
  //               onClick={setPasswordView}></i>
  //           )}
  //         </div>
  //       </div>
  //     </div>


  //     <div className="border border-grayClr py-[7px] px-3 rounded-md mb-1">
  //       <div className="flex items-center space-x-3 w-full">
  //         <i className="bi bi-lock-fill text-grayClr"></i>
  //         <input
  //           type="password"
  //           placeholder="Confirm Password"
  //           className="number outline-none w-full"
  //           ref={confirmPasswordInputRef}
  //         />
  //         <div className="flex justify-end">
  //           {viewConfirmPassword ? (
  //             <i
  //               className="bi bi-eye text-grayClr"
  //               onClick={setConfirmPasswordView}></i>
  //           ) : (
  //             <i
  //               className="bi bi-eye-slash-fill text-grayClr"
  //               onClick={setConfirmPasswordView}></i>
  //           )}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="flex space-x-3 items-center md:-mt-3">
  //       <input type="checkbox" className="" />
  //       <p className="text-sm text-gray-500">I agree to the Terms & Condition</p>
  //     </div>
  //   </div>
  // );
}

export default CreateForm;





