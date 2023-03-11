import React from "react";
import AuthNav from "../../components/form/AuthNav";
import AuthFooter from "../../components/form/AuthFooter";
import NewSignup from "../../components/form/NewSignup";
import Success from "../../components/Success";

function NewSignUpForm() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-between w-full relative">
      {/* <div className=""> */}
      <AuthNav />
      <NewSignup />
      <AuthFooter />
      {/* </div> */}
      <div className="">
        <svg
          className="absolute h-[50vh] bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#7F3DFF"
            fill-opacity="0.2"
            d="M0,224L40,202.7C80,181,160,139,240,128C320,117,400,139,480,170.7C560,203,640,245,720,240C800,235,880,181,960,133.3C1040,85,1120,43,1200,32C1280,21,1360,43,1400,53.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default NewSignUpForm;
