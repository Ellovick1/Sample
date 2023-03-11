import React, { useState } from "react";
import UserImage from "../../assets/merchant-payments/userPay.png";

const NewMerchantNavbar = () => {
  const [searchInput, setSearchInput] = useState(false);
  //   let showCancelSearch = true;

  const toggleSearchInput = () => {
    // showCancelSearch == true
    //   ? (showCancelSearch = false)
    //   : (showCancelSearch = true);

    setSearchInput(!searchInput);
  };

  return (
    <nav
      className="relative py-4 w-full border flex justify-between items-center px-2 md:px-8
    ">
      <div className="bg-white rounded-xl max-w-md w-full  items-center px-8 mr-8 hidden sm:flex sm:gap-3">
        <i className="bi bi-search text-grayClr text-[20px]"></i>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-3xl outline-none pl-1 py-2"
        />
      </div>
      <div className="relative max-w-[250px] w-full">
        {searchInput == false ? (
          <i
            className="bi bi-search text-black text-[20px] inline sm:hidden"
            onClick={toggleSearchInput}></i>
        ) : (
          <i
            className="bi bi-x-lg inline sm:hidden"
            onClick={toggleSearchInput}></i>
        )}
        {searchInput && (
          <div className="max-w-md w-full absolute bg-white rounded-3xl border   items-center px-4 flex gap-3 sm:hidden">
            <i className="bi bi-search text-grayClr text-[20px]"></i>
            <input
              type="text"
              placeholder="Search"
              className="w-full  rounded-3xl outline-none pl-1 py-2 "
            />
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <p className="font-semibold text-[#EA4335] text-lg">Unverified</p>

        <div className="w-[40px] max-h-[40px] rounded-full border border-black">
          <img
            src={UserImage}
            alt="img"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    </nav>
  );
};

export default NewMerchantNavbar;
