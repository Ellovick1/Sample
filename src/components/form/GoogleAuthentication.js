import React from "react";
import googleLogo from "../../assets/Google.svg.webp";
import "./GoogleAuthentification.css";



function GoogleAuthentication({auth, add}) {
  return (
    <>
      <div onClick={() => {
        auth() 
        add()
        }} className="flex items-center space-x-3 bg-gray-100 w-fit mx-auto px-3 py-2 my-[10px] rounded-lg hover:cursor-pointer">
        <img
          src={googleLogo}
          alt="" 
          width="20px"
          height="20px"
          className="object-cover" 
        />
        <h4 className="text-sm ">Sign up with Google</h4>
      </div>
      <h2 className="text-grayClr py-1 text-center">OR</h2>
    </>
  );
}

export default GoogleAuthentication;
