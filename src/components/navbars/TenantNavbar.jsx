import React, { useState } from "react";

const TenantNavbar = () => {
  const [searchInput, setSearchInput] = useState(false);
  //   let showCancelSearch = true;

  const toggleSearchInput = () => {
    // showCancelSearch == true
    //   ? (showCancelSearch = false)
    //   : (showCancelSearch = true);

    setSearchInput(!searchInput);
    console.log(searchInput);
  };

  return (
    <nav
      className="relative py-4 w-full border flex justify-between items-center px-2 md:px-8
    ">
      <div className="bg-white rounded-3xl max-w-md w-full border border-themePurple items-center px-8 mr-8 hidden sm:flex">
        <input
          type="text"
          placeholder="Search here"
          className="w-full rounded-3xl outline-none pl-1 py-2"
        />
        <i className="bi bi-search text-grayClr text-[20px]"></i>
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
          <div className="max-w-md w-full absolute bg-white rounded-3xl border border-themePurple  items-center px-4 flex sm:hidden">
            <input
              type="text"
              placeholder="Search here"
              className="w-full  rounded-3xl outline-none pl-1 py-2 "
            />
            <i className="bi bi-search text-grayClr text-[20px]"></i>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <i className="bi bi-bell text-[25px]"></i>

        <div className="w-[40px] max-h-[40px] rounded-full border border-black">
          <img
            src="https://imgs.search.brave.com/yqeSWWFTwNvBMB3lvEmDNVSCpOdA5iUg8GcQeCu9rXI/rs:fit:600:600:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvNS9BdmF0/YXItRmFjZS1UcmFu/c3BhcmVudC1CYWNr/Z3JvdW5kLVBORy5w/bmc"
            alt="img"
            className="object-cover w-full h-full "
          />
        </div>
        <p>
          John <br className=" block xsm:hidden" /> Doe
        </p>
      </div>
    </nav>
  );
}

export default TenantNavbar
