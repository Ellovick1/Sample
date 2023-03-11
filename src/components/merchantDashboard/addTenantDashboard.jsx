import React from 'react'
import img from '../../assets/dash-details-img/form.svg'


const AddTenantDashboard = () => {
    return (
      <div className='px-8 bg-[#f9f9f9]'>
      <div className="rounded py-4 px-4 border mt-7">
            <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >My Tenant
               </h3>
         </div>

        <div class="overflow-x-auto mt-4 mb-4">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100 rounded-lg text-[#737d88]">
            <tr>
              <th
                class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
              >
                Name
              </th>
              <th
                class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
              >
               Flat
              </th>
              <th
                class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
              >
              Total Rent
              </th>
              <th
                class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900 overflow-y-auto"
              >
                Service Charge
              </th>
              <th
                class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
              >
                Utility Bills
              </th>
              <th
                class="whitespace-nowrap px-4 py-4 text-left font-medium text-gray-900"
              >
                
              </th>
            </tr>
          </thead>
      
          <tbody class="divide-y divide-gray-200 text-[#152738]">
            <tr>
              <td class="whitespace-nowrap px-4 py-4">Grace Clement</td>
              <td class="whitespace-nowrap px-4 py-4 ">Flat 1</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 text-red-400">Remove</td>

            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-4">Grace Clement</td>
              <td class="whitespace-nowrap px-4 py-4 ">Flat 1</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 text-red-400">Remove</td>

            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-4">Grace Clement</td>
              <td class="whitespace-nowrap px-4 py-4 ">Flat 1</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 text-red-400">Remove</td>

            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-4">Grace Clement</td>
              <td class="whitespace-nowrap px-4 py-4 ">Flat 1</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 text-red-400">Remove</td>

            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-4">Grace Clement</td>
              <td class="whitespace-nowrap px-4 py-4 ">Flat 1</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 text-red-400">Remove</td>

            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-4">Grace Clement</td>
              <td class="whitespace-nowrap px-4 py-4 ">Flat 1</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 ">N500,000</td>
              <td class="whitespace-nowrap px-4 py-4 text-red-400">Remove</td>

            </tr>
            
          </tbody>
        </table>

        
        <div className='flex justify-center py-3 mb-3'>
                    <button className='bg-[#7F3DFF] hover:bg-[#8a50ff] rounded-lg px-[4rem] py-2 text-white '>Add Tenant</button>
                </div>
      </div>
      </div>
    )
}

export default AddTenantDashboard
