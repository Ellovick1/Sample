import React from "react";
import AuthNav from "../../components/form/AuthNav";
import AuthFooter from "../../components/form/AuthFooter";

export function ForgotPassword() {
  return (
    <div className="h-fit lg:h-screen bg-[#D9D9D9] flex flex-col justify-between w-full ">
      {/* <div className=""> */}
      <AuthNav 
      
      />
      <div className="mx-4">
        <div className=" max-w-[25rem] w-full mx-auto mb-12 pb-8 h-fit bg-[#fff] rounded-md md:pb-36 md:mb-0 ">
          <div className="max-w-[300px] mx-auto px-4 sm:px-0">
            <h5 className="text-4xl text-center pb-4 pt-12  text-[2em] font-[600] ">
              Forgot Password
            </h5>
            <p className="text-grayClr text-center px-2 text-[.9em] ">
              Please enter the email associated with your account and we’ll send
              an email with instructions to reset your password.
            </p>
          </div>

          <form className="px-6 py-3 pb-8 pt-6 flex flex-col gap-[1.3rem] mb-8 md:mb-0">
            <div className="border border-grayClr flex items-center space-x-3 py-2 px-3 rounded-md">
              <i className="bi bi-envelope-fill text-grayClr"></i>
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none w-full"
              />
            </div>
            <input
              type="submit"
              value="Send Instructions"
              className="bg-themePurple text-white p-2 rounded-md hover:cursor-pointer hover:outline hover:outline-2 hover:outline-black"
            />
          </form>
        </div>
      </div>
      <AuthFooter />
      {/* </div> */}
    </div>
  );
}


