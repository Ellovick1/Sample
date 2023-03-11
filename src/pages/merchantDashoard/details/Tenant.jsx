import {NotTenant} from './NotTenant'
import React,{useState} from 'react'
// import  { Link } from 'react-router-dom'
import img from '../../../assets/dash-details-img/form.svg'
// import {} from 'react-icons/ci'
import {TbFilter} from 'react-icons/tb';
// import {CiFilter} from 'react-icons/ci';

export const Tenant= () => { 
    const [showTenant, setShowTenant] = useState(true)
    const [showModal, setShowModal] = useState("hide");

    const showFilter = () => {
      if (showModal === "show") {
        setShowModal("hide");
      }
      if (showModal === "hide") {
        setShowModal("show");
      }
    };
    return (
     <div>
          {
            showTenant ? (<div>
              <div>
                  <div className="relative max-w-3xl mx-auto px-8 text-[#7F3DFF] flex items-center justify-end gap-[5px] mt-2 ">
                    <p className="text-sm">filter</p>
                    <TbFilter 
                      onClick={showFilter}
                     data-dropdown-toggle="dropdown"
                     type="button"
                    className="cursor-pointer"/>
                   
                      
                    <div
                   className={`${
                    showModal === "hide"
                      ? "hidden"
                      : "z-10 absolute bg-[#fff] text-[#000] rounded-md top-[100%] right-0"
                  } `}
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="top"
                  >
                   <ul
                      className=" text-sm shadow-md px-5 py-2 rounded-md cursor-pointer"
                      aria-labelledby="dropdownDefault"
                      style={{ display: "flex", flexDirection: "column",alignItems:'center' ,gap:'10px'}}>
                         <li className=" text-[#7F3DFF]">All</li>
                         <li>Due</li>
                         <li>Pending</li>
                         <li>Completed</li>
                    </ul>
                  </div>
                  </div>
                 
              </div>
               <div class="overflow-x-auto mt-4 mb-4">
  <table class="min-w-full divide-y divide-gray-200 text-sm">
    <thead class="bg-gray-100 rounded-lg text-[#737d88]">
      <tr>
        <th
          class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
        >
          Flat Number
        </th>
        <th
          class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
        >
         Description
        </th>
        <th
          class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
        >
        Name of Tenant
        </th>
        <th
          class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900 overflow-y-auto"
        >
          Status
        </th>
        <th
          class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
        >
          Action
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200 text-[#152738]">
      <tr>
        <td class="whitespace-nowrap px-4 py-4">
           <div className="flex items-center gap-[3px]">
              <img src={img} alt=''/>
               <div className="text-sm leading-4 text-[#152738]">
                 Flat 1
               </div>
           </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4 ">Second floor room 1</td>
        <td class="whitespace-nowrap px-4 py-4 ">Grace Clement</td>
        <td class="whitespace-nowrap px-4 py-4 text-red-400">Due</td>
        <td class="whitespace-nowrap px-4 py-4 flex items-center justify-center">   
                   <div className="cursor-pointer  border border-[#8672FF] text-[#8672FF] py-[2px] text-xs w-1/2 flex items-center justify-center">
                      List
                   </div>   
        </td>
      </tr>
      <tr>
        <td class="whitespace-nowrap px-4 py-4 ">
           <div className="flex items-center gap-[3px]">
              <img src={img} alt=''/>
               <div className="text-sm leading-4 text-[#152738]">
                 Flat 1
               </div>
           </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4 ">Second floor room 1</td>
        <td class="whitespace-nowrap px-4 py-4 ">Grace Clement</td>
        <td class="whitespace-nowrap px-4 py-4 text-red-400">Due</td>
        <td class="whitespace-nowrap px-4 py-4 flex items-center justify-center">   
                   <div className="cursor-pointer  border border-[#8672FF] text-[#8672FF] py-[2px] text-xs w-1/2 flex items-center justify-center">
                      List
                   </div>   
        </td>
      </tr>
      <tr>
        <td class="whitespace-nowrap px-4 py-4">
           <div className="flex items-center gap-[3px]">
              <img src={img} alt=''/>
               <div className="text-sm leading-4 text-[#152738]">
                 Flat 1
               </div>
           </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4 ">Second floor room 1</td>
        <td class="whitespace-nowrap px-4 py-4 ">Grace Clement</td>
        <td class="whitespace-nowrap px-4 py-4 text-red-400">Due</td>
        <td class="whitespace-nowrap px-4 py-4 flex items-center justify-center">   
                   <div className="cursor-pointer  border border-[#8672FF] text-[#8672FF] py-[2px] text-xs w-1/2 flex items-center justify-center">
                      List
                   </div>   
        </td>
      </tr>
      <tr>
        <td class="whitespace-nowrap px-4 py-4 ">
           <div className="flex items-center gap-[3px]">
              <img src={img} alt=''/>
               <div className="text-sm leading-4 text-[#152738]">
                 Flat 1
               </div>
           </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4 ">Second floor room 1</td>
        <td class="whitespace-nowrap px-4 py-4 ">Grace Clement</td>
        <td class="whitespace-nowrap px-4 py-4 text-red-400">Due</td>
        <td class="whitespace-nowrap px-4 py-4 flex items-center justify-center">   
                   <div className="cursor-pointer  border border-[#8672FF] text-[#8672FF] py-[2px] text-xs w-1/2 flex items-center justify-center">
                      List
                   </div>   
        </td>
      </tr>
      
    </tbody>
  </table>
</div>

            </div>):
            (
                <NotTenant />
            )
          }
     </div>
    )
}

