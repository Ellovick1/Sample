import React from 'react'
import {HiUpload} from 'react-icons/hi'


const addRecords = () => {
    const handleFile = (e) => { 
        console.log(e.target.value)
        }
    return (
        <div className="py-4 px-[24px] font-[roboto]">




            <div className="block md:flex gap-[50px]">
                <div className="left flex-1 shadow bg-white ">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className=" pl-4 pt-4 font-bold leading-7 text-[1rem] sm:pr-12 md:pr-24">Record Summary</h3>
                        </div>
                        <div className='pt-4 self-center items-center space-x-3 pr-4'>
                            <small className='text-[#FCAC12] font-bold bg-[#FCEED4] px-4 py-2 rounded-lg'>Week</small>
                            <small className="text-[#91919F] font-[600] ">Month</small>
                            <small className="text-[#91919F] font-[600] ">Year</small>
                        </div>
                    </div>
                    <form action="" class="mt-6 mb-0 space-y-2 p-8 ">

                        <div>
                            <label class="text-sm font-medium text-[gray]">Amount</label>

                            <div class="relative mt-1">
                                <input
                                    type="number"
                                    class="w-full rounded-lg border border-gray-500 p-2 text-sm "
                                />
                            </div>
                        </div>

                        <div>
                            <label class="text-sm font-medium text-[gray] ">Categories</label>

                            <div class="relative mt-1">
                                <input
                                    type="text"
                                    class="w-full rounded-lg border border-gray-500 p-2 text-sm shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label class="text-sm font-medium text-[gray]">Description</label>

                            <div class="relative mt-1">
                                <input
                                    type="text"
                                    class="w-full rounded-lg border border-gray-500 p-2 text-sm shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label  class="text-sm font-medium text-[gray] ">Remarks</label>

                            <div class="relative mt-1">
                                <input
                                    type="text"
                                    class="w-full rounded-lg border border-gray-500 p-2 text-sm shadow-sm"
                                />
                            </div>
                        </div>
                        <div 
                     className="relative border border-black border-dashed h-[100px] w-full bg-gray-200 flex items-center justify-center">
                        <input 
                        type="file"
                        onChange={handleFile}
                        className="relative text-right opacity-0 z-20 cursor-pointer height-[46px] max-w-[200px]"
                       />
                       <button className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <HiUpload 
                        style={{width:30,height:30,color:'gray'}}
                        />
                       </button>
                       
                     </div>

                        <div>
                            <p>Repeat</p>
                            <small className="text-[#7F3DFF]">Mark as paid</small>
                        </div>

                        <button
                            type="submit"
                            class="block w-full rounded-lg bg-[#7F3DFF] px-5 py-2 text-sm font-medium text-white"
                        >
                            Next
                        </button>

                    </form>

                </div>
                <div className="right bg-white  flex-1 shadow mt-[30px] md:mt-0  sm:mt-0">
                <h3 className="flex justify-between pl-4 pt-4 pr-4 font-bold leading-7 text-[1rem] mb-2">Tenants with invoice dues
                        <span className='text-[0.8rem] text-[#7F3DFF]'>Due Date</span>
                    </h3>
                </div>
                

            </div>

                </div>
                


    )
}

export default addRecords
