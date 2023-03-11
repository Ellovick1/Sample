import React from 'react'

function requestDetails() {
    return (
        <div className=''>
            <div className='bg-white m-[1.5rem] py-4 px-12 rounded-[0.8rem]'>
                <h3 className='font-[400] font-[DM Sans] text-[#000000]'>Maintenance Request</h3>
            </div>

            <div className='bg-white p-4 m-[1.5rem]  pt-[0.8rem] pb-[3rem] rounded-[0.8rem]'>

                <div className='bg-[#F9F9F9] m-[1.5rem] rounded-[0.8rem] p-8 w-[83%]' style={{width: '85%'}}>
                    <div>
                        <h1 className='font-bold text-[#91919F] pb-4'>Request Details</h1>
                    </div>
                    <div className='flex' style={{gap:'9rem'}}>
                        <div className=''>
                            <p className='pt-[2rem] pb-[2rem] text-[#91919F] font-[500]'>Flat ID</p>
                            <p className='pt-4 pb-4 text-[#91919F] font-[500]'>Name</p>
                            <p className='pt-4 pb-4 text-[#91919F] font-[500]'>Phone Number</p>
                            <p className='pt-4 pb-4 text-[#91919F] font-[500]'>Satus</p>
                            <p className='pt-4 pb-4 text-[#91919F] font-[500]'>Date</p>
                        </div>
                        <div className=''>
                            <p className='pt-[2rem] pb-[2rem] text-[#292B2D] font-[500]'>D13</p>
                            <p className='pt-4 pb-4 text-[#292B2D] font-[500]'>Ebere Moses</p>
                            <p className='pt-4 pb-4 text-[#292B2D] font-[500]'>09045826345</p>
                            <div className='pt-4 pb-4'>
                            <p className='p-[0.3rem] bg-[#FBE6BC] text-[#F1A208] text-center'>pending</p>
                            </div>
                            <p className='pt-4 pb-4 text-[#292B2D] font-[500]'> 31-07-2022</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#F9F9F9] m-[1.5rem] rounded-[0.8rem] w-[83%] p-8'  style={{width: '85%'}}>
                    <div>
                        <h1 className='font-bold text-[#91919F] pt-4 pb-4'>Request Title</h1>
                        <p className='font-[500] pb-4 text-[#292B2D]'> leaking kitchen cabinet</p>

                    </div>
                </div>

                <div className='bg-gray-200 m-[1.5rem] rounded-[0.8rem]  w-[83%] p-8'  style={{width: '85%'}}>
                    <div className='pr-8'>
                        <h1 className='font-bold text-[#91919F] pt-4 pb-4'>Complaint</h1>
                        <p className='text-[#292B2D]'> Dear caretaker, I have issues with my kitchen cabinet. It is leaking, which makes it
                            uncomfortable for me. I will really appreciate if my request is considered. Thank you.
                        </p>

                    </div>
                </div>

                <div className="flex" style={{justifyContent : 'center', marginRight: '8rem'}}>
                    <button
                        className="get-btn px-[5rem] py-2 rounded-lg  text-[#fff] bg-[#7F3DFF] font-bold text-xs sm:text-sm cursor-pointer" style={{paddingLeft :'6rem', paddingRight: '6rem'}}>
                        Accept
                    </button>
                </div>

            </div>
        </div>
    )
}

export default requestDetails