import React, { useState } from 'react'
import { TbFilter } from 'react-icons/tb';


function RequestTable() {

    const [showTable, setShowTable] = useState(true)
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
            <div className='bg-white m-[1.5rem] px-12 rounded-[0.8rem]  py-4'>
            <h3 className='font-[400] font-[DM Sans] text-[#000000]'>Maintenance Request</h3>
            </div>

            <div class="flex flex-col  m-[1.5rem] bg-white">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden px-12">
                            <div className='flex justify-between py-4'>
                                <h3 className='font-bold text-[#91919F]'>Request Information</h3>

                                <div>
                                    <div className="relative max-w-3xl mx-auto px-8 text-[#7F3DFF] flex items-center justify-end gap-[5px] mt-2 ">
                                        <p className="text-sm">filter</p>
                                        <TbFilter
                                            onClick={showFilter}
                                            data-dropdown-toggle="dropdown"
                                            type="button"
                                            className="cursor-pointer" />


                                        <div
                                            className={`${showModal === "hide"
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
                                                style={{ display: "flex", flexDirection: "column", alignItems: 'center', gap: '10px' }}>
                                                <li className=" text-[#7F3DFF]">All</li>
                                                <li>pending</li>
                                                <li>rejected</li>
                                                <li>Completed</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <table class="min-w-full text-center">
                                <thead class="border-b bg-[#F3F4F5]">
                                    <tr>
                                        <th scope="col" class="text-sm  font-[500] text-[#737D88] px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" class="text-sm  font-[500] text-[#737D88] px-6 py-4">
                                            Request Titles
                                        </th>
                                        <th scope="col" class="text-sm  font-[500] text-[#737D88] px-6 py-4">
                                            Phone Number
                                        </th>
                                        <th scope="col" class="text-sm  font-[500] text-[#737D88] px-6 py-4">
                                            Status
                                        </th>
                                        <th scope="col" class="text-sm  font-[500] text-[#737D88] px-6 py-4">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            Leaking kitchen cabinet
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p className='p-[0.3rem] bg-[#FBE6BC] text-[#F1A208] text-center'>pending</p>
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            3 mar 2022
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm  font-[500] text-[black]">Grace</td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            Leaking kitchen cabinet
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p className='p-[0.3rem] bg-[#FBE6BC] text-[#F1A208] text-center'>pending</p>
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            3 mar 2022
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm  font-[500] text-[black]">Grace</td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            Leaking kitchen cabinet
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p className='p-[0.3rem] bg-[#CCEEE1] text-[#00A86B] text-center'>completed</p>
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            3 mar 2022
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm  font-[500] text-[black]">Grace</td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            Leaking kitchen cabinet
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            rejected
                                            {/* <p className='p-[0.3rem] bg-[#FBE6BC] text-[#F1A208] text-center'>pending</p> */}
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            3 mar 2022
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm  font-[500] text-[#000000] opacity-[0.6]">Grace</td>
                                        <td class="text-sm text-[#000000] opacity-[0.6] font-[400] px-6 py-4 whitespace-nowrap">
                                            Leaking kitchen cabinet
                                        </td>
                                        <td class="text-sm text-[#000000] opacity-[0.6] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td class="text-sm text-[#000000] opacity-[0.6] font-[400] px-6 py-4 whitespace-nowrap">
                                            rejected
                                            {/* <p className='p-[0.3rem] bg-[#FBE6BC] text-[#F1A208] text-center'>pending</p> */}
                                        </td>
                                        <td class="text-sm text-[#000000] opacity-[0.6] font-[400] px-6 py-4 whitespace-nowrap">
                                            3 mar 2022
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm  font-[500] text-[black]">Grace</td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            Leaking kitchen cabinet
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p className='p-[0.3rem] bg-[#CCEEE1] text-[#00A86B] text-center'>completed</p>
                                        </td>
                                        <td class="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            3 mar 2022
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestTable