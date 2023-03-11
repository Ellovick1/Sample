import {NotTenant} from './NotTenant'
import React,{useState} from 'react'
// import  { Link } from 'react-router-dom'
import img from '../../../assets/dash-details-img/form.svg'


export const Finance = () => { 
    const [showTenant, setShowTenant] = useState(false)
    return (
     <div>
          {
            showTenant ? (<div>
               <div class="overflow-x-auto mt-6">
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
        <td class="whitespace-nowrap px-4 py-4 text-[#152738]">Vacant</td>
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
        <td class="whitespace-nowrap px-4 py-4 text-[#152738]">Vacant</td>
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
        <td class="whitespace-nowrap px-4 py-4 text-[#152738]">Vacant</td>
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
        <td class="whitespace-nowrap px-4 py-4 text-[#152738]">Vacant</td>
        <td class="whitespace-nowrap px-4 py-4 flex items-center justify-center">   
                   <div className="cursor-pointer  border border-[#8672FF] text-[#8672FF] py-[2px] text-xs w-1/2 flex items-center justify-center">
                      List
                   </div>   
        </td>
      </tr>
      
    </tbody>
  </table>
</div>

            </div>):(
                <NotTenant />
            )
          }
     </div>
    )
}
