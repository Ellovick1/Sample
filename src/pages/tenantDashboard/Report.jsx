import React from "react";

function Report() {
  return (
    <>
      <div className=" justify-between px-4 items-center my-8 block flex-wrap md:flex md:px-12">
        <ul className="flex flex-wrap items-center font-semibold ">
          <li className="text-[#F2D17A] underline ">
            <a href="">Expenses</a>
          </li>
          <li>
            <a href="" className="mx-8">
              Savings
            </a>
          </li>
          <li>
            <a href="" className="pr-8">
              Upcoming
            </a>
          </li>
          <li>
            <a href="">Insight</a>
          </li>
        </ul>

        <div className="flex space-x-4 items-center mt-4 md:m-0">
          <div className="bg-themePurple text-white h-[40px] w-[40px] rounded-[50%] flex justify-center items-center">
            <i className="bi bi-funnel text-xl "></i>
          </div>
          <div className="bg-themePurple text-white  h-[40px] w-[40px] rounded-[50%] flex justify-center items-center">
            <i class="bi bi-box-arrow-in-down text-xl"></i>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-8">
        <div className="bg-white shadow max-w-full h-60 "></div>
        <h4 className="mx-4 my-4 md:mx-12 font-semibold">
          Uh-oh! No expenses. <br /> Looks like you have no expenses yet. Your
          expenses will appear here.
        </h4>
      </div>
    </>
  );
}

export default Report;
