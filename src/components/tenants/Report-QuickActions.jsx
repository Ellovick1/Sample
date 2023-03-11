import React from "react";

const QuickAction = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <a href="#" className="text-[#6C63FF] px-5 underline">
          Quick Actions
        </a>
      </div>

      <div class="container px-5 md:pl-20 grid md:flex  flex-wrap sm:grid-cols-2  gap-10 md:mx-auto py-5 bg-[#121122] text-white">
        {/* <div className="lg:flex md:flex sm:flex xsm:flex gap-10 block"> */}
        <div className="flex gap-8">
          <div>
            <i class="bi bi-plus-square text-[#D0CA38]"></i>
            <a className="underline pl-2" href="#">
              Link Property
            </a>
          </div>
          <a href="#" className="underline">
            Pay Bills
          </a>
        </div>

        <div className="flex gap-4">
          <div>
            <i class="bi bi-bell text-[#D0CA38]"></i>
            <a href="#" className="underline pl-2">
              Make Request
            </a>
          </div>
          <a href="#" className="underline">
            Save For Rent
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickAction;
