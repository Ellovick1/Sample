import React from "react";

const TeamInformation = () => {
  return (
    <div className="bg-white rounded-lg mt-10 px-8  py-12">
      <h1 className="text-xl text-[#91919F] font-semibold  mb-8">
        Team Information
      </h1>
      <p className=" block text-right lg:hidden">Swipe to view more </p>
      <table className=" w-full text-center">
        <thead className=" bg-[#F3F4F5] ">
          <th className=" py-2 text-[#91919F] font-medium">Name</th>
          <th className=" py-2 text-[#91919F]  font-medium">Roles</th>
          <th className=" py-2 text-[#91919F] font-medium ">Email</th>
          <th className=" py-2 text-[#91919F] font-medium">Phone Number</th>
          <th></th>
        </thead>
        <tbody>
          <tr className="">
            <td className="text-[#91919F] py-4 text-sm">Grace Clement </td>
            <td className="text-[#91919F] py-4 text-sm">landlord</td>
            <td className="text-[#91919F] py-4 text-sm">
              ebereelizabethm@gmail.com
            </td>
            <td className="text-[#91919F] py-4 text-sm">08177180049</td>
            <td className=" py-4 flex items-center justify-center gap-4">
              <p className="text-sm font-semibold text-[#7F3DFF]">Edit</p>
              <p className="text-sm font-semibold text-[#EA4335]">Remove</p>
            </td>
          </tr>
          <tr className="">
            <td className="text-[#91919F] py-4 text-sm">Grace Clement </td>
            <td className="text-[#91919F] py-4 text-sm">caretaker</td>
            <td className="text-[#91919F] py-4 text-sm">
              ebereelizabethm@gmail.com
            </td>
            <td className="text-[#91919F] py-4 text-sm">08177180049</td>
            <td className=" py-4"> </td>
          </tr>
          <tr className="">
            <td className="text-[#91919F] py-4 text-sm">Grace Clement </td>
            <td className="text-[#91919F] py-4 text-sm">operator</td>
            <td className="text-[#91919F] py-4 text-sm">
              ebereelizabethm@gmail.com
            </td>
            <td className="text-[#91919F] py-4 text-sm">08177180049</td>
            <td className=" py-4"> </td>
          </tr>
          <tr className="">
            <td className="text-[#91919F] py-4 text-sm">Grace Clement </td>
            <td className="text-[#91919F] py-4 text-sm">property manger</td>
            <td className="text-[#91919F] py-4 text-sm">
              ebereelizabethm@gmail.com
            </td>
            <td className="text-[#91919F] py-4 text-sm">08177180049</td>
            <td className=" py-4"> </td>
          </tr>
          <tr className="">
            <td className="text-[#91919F] py-4 text-sm">Grace Clement </td>
            <td className="text-[#91919F] py-4 text-sm">caretaker</td>
            <td className="text-[#91919F] py-4 text-sm">
              ebereelizabethm@gmail.com
            </td>
            <td className="text-[#91919F] py-4 text-sm">08177180049</td>
            <td className=" py-4"> </td>
          </tr>
          <tr className="">
            <td className="text-[#91919F] py-4 text-sm">Grace Clement </td>
            <td className="text-[#91919F] py-4 text-sm">operator</td>
            <td className="text-[#91919F] py-4 text-sm">
              ebereelizabethm@gmail.com
            </td>
            <td className="text-[#91919F] py-4 text-sm">08177180049</td>
            <td className=" py-4"> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamInformation;
