import React from 'react'
import UserImage from "../../../assets/merchant-payments/userPay.png";
import EditIcon from "../../../assets/edit-icon.png";
import ChangePassword from '../../../components/modals/ChangePassword'



const Settings = () => {
    return (
        <div>
            <form className="bg-white mt-12 m-[1.5rem] py-4 px-12 rounded-[0.8rem]">
                <div className='pb-12'>
                    <h3 className='font-[400] font-[DM Sans] text-[#000000]'>Personal Information</h3>
                </div>

                <div className='flex justify-between place-items-center'>
                    <div className='flex gap-6 place-items-center'>
                        <img src={UserImage} alt="" className='rounded-[50%] w-[200px] h-[200px]' />
                        <div>
                            <h3 className='font-[700] font-[DM Sans] text-[#000000]'>Amara Somto</h3>
                            <p className='font-[400] font-[DM Sans] text-[#000000]'>ebereelizabethm@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <img src={EditIcon} alt="" />
                    </div>
                </div>

                <div className="md:flex  pt-12  mx-2 md:flex-row gap-12">
                    <div className='w-[100%]'>
                        <label
                            htmlFor="firstName"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            First name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            className="border border-black rounded-xl py-4 w-full px-4"
                        />
                    </div>

                    <div  className='w-[100%]'>
                        <label
                            htmlFor="surname"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            Surname
                        </label>
                        <input
                            id="surname"
                            type="text"
                            className="border border-black rounded-xl py-4 w-full px-4"
                        />
                    </div>

                </div>

                <div className="mt-4 mx-2  md:mt-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            Email
                        </label>
                        <input
                            id="cardNumber"
                            type="email"
                            className="border border-black rounded-xl py-4 w-full px-4"
                        />
                    </div>
                </div>

                <div className="md:flex  pt-12  mx-2 md:flex-row gap-12">
                    <div className='w-[100%]'>
                        <label
                            htmlFor="state"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            State
                        </label>
                        <input
                            id="state"
                            type="text"
                            className="border border-black rounded-xl py-4 w-full px-4"
                        />
                    </div>

                    <div  className='w-[100%]'>
                        <label
                            htmlFor="phone"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="number"
                            className="border border-black rounded-xl py-4 w-full px-4"
                        />
                    </div>

                </div>
                
                <div className="md:flex  pt-12  mx-2 md:flex-row gap-12">
                    <div className='w-[100%] relative'>
                        <label
                            htmlFor="password"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="border border-black rounded-xl py-4 w-full px-4"
                            placeholder='*********'
                        />
                        <ChangePassword className='w-[20px] absolute right-[2rem] top-[2.7rem]' style={{top:'2.7rem'}} />
                          {/* <img src={EditIcon} alt="" className='w-[20px] absolute right-[2rem] top-[2.7rem]' style={{top:'2.7rem'}}/> */}
                    </div>

                    <div  className='w-[100%]'>
                        <label
                            htmlFor="country"
                            className="text-[#7D7D7D] pb-1 text-md text-lg">
                            Country
                        </label>
                        <input
                            id="country"
                            type="text"
                            className="border border-black rounded-xl py-4 w-full px-4"
                        />
                    </div>

                </div>
                


                <div className='w-[45%] mx-auto mt-4'>
                    <input
                        type="submit"
                        value=" Update"
                        className="bg-[#7F3DFF] text-white font-semibold rounded-xl py-3 w-full mt-4 mx-auto"
                    />
                </div>
            </form>

        </div>
    )
}

export default Settings