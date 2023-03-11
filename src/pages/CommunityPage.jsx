import React from 'react'
import Nav from "../components/navbars/NewLandingNavbar"
import Community from "../assets/community.png"
import Img1 from "../assets/community-icon1.png"
import Img2 from "../assets/community-icon2.png"
import Img3 from "../assets/community-icon3.png"
import Hoa from "../assets/HOA.png"
import Estate from "../assets/communityEstate.png"
import Footer from "../components/footer/Footer"

const CommunityPage = () => {
    return (

        <div>
            <Nav />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 grid-cols-1 pb-6'>
                <div className='items-center w-[20rem] py-10'>
                    <h1 className="text-4xl text-black leading-[3rem] font-bold">The Industry’s Leading <span className='text-[#7F3DFF]'> CMS for Residential Associations/Managers </span> </h1>
                    <p className='text-sm text-[grey] py-4'>Mend App  gives and delivers services real ROI for  residential associations and Estate management companies while enagaging and empowering the communities they serve</p>
                    <div className='space-x-3 py-1'>
                        <button className='bg-[#7F3DFF] text-white text-sm font-bold pl-6 pr-6 pt-2 pb-2 rounded-md'>Get Started</button>
                        <button className='bg-white text-[#7F3DFF] text-sm font-bold pl-6 pr-6 pt-2 pb-2 rounded-md border border-[#7F3DFF]'>Contact Team</button>
                    </div>
                </div>
                <div className=''>
                    <img src={Community} alt="" />
                </div>
            </div>


            <div className='p-4 bg-[#7F3DFF] '>
                <div className='max-w-7xl mx-auto text-white font-600'>
                    <h3 className='py-2 text-center text-2xl'> At the foremost of Fintech, Mend gives homeowner and community <br /> associations the broadest range of digital payment options, helping <br /> to streamline dues collections.</h3>

                    <div className='grid md:grid-cols-3 grid-cols-1 py-5 space-x-2'>
                        <div className="text-center space-y-4">
                            <div className='bg-white p-3 rounded-full w-[4rem] mx-auto'>
                                <img src={Img1} alt="" width="50px" height="50px" />
                            </div>
                            <h5 className="text-white font-700">End to End Transparency</h5>
                            <p className=''>Through Mend rent assist, you can request for rent assistance and pay your Landlord in installment. It is a win - win for both Tenants and Landlord and a great tenancy - landlord experience </p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className='bg-white p-3 rounded-full w-[4rem] mx-auto'>
                                <img src={Img2} alt="" width="50px" height="50px" />
                            </div>
                            <h5 className="text-white font-700">100% Digital & Collect HOA Dues Online</h5>
                            <p className=''> Mend App  helps to streamline dues collections for  homeowners assocition, Estates  and community associations digital payment option ranging from gate pass payment, dues etc with just a click on their phones  range of digital payment options,  </p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className='bg-white p-3 rounded-full w-[4rem] mx-auto'>
                                <img src={Img3} alt="" width="50px" height="50px" />
                            </div>
                            <h5 className="text-white font-700">Time Savings for Members </h5>
                            <p className=''> Members and residents enjoy unique  and flexible features like Guest Payments, which allows residents & members  to bypass  account registration to make quick payments from the comfort of their home or on-site.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 bg-[#F3EBFF]'>
                <div>
                    <img src={Hoa} alt="" />
                </div>
                <div className='items-center py-[3rem] space-y-5 my-auto mx-auto'>
                    <h5 className='text-4xl text-[#7F3DFF] font-bold'>Made For HOA</h5>
                    <p className='w-[20rem] '>Make it easy for your union members to pay their dues. Residents are happy when they have alternative payment method</p>
                    <button className='bg-white text-[#7F3DFF] text-sm font-bold pl-6 pr-6 pt-2 pb-2 rounded-md border border-[#7F3DFF]'>Book a Free Demo</button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 bg-[#F3EBFF]'>
                <div className='items-center py-[3rem] space-y-5 my-auto mx-auto'>
                    <h5 className='text-4xl text-[#7F3DFF] font-bold'>Made For Estates</h5>
                    <p className='w-[20rem] '>Run your Estate professionally. Let your gated residents pay their security bills, etc on Mend while your run your accounting on our platform.</p>
                    <button className='bg-white text-[#7F3DFF] text-sm font-bold pl-6 pr-6 pt-2 pb-2 rounded-md border border-[#7F3DFF]'>Book a Free Demo</button>
                </div>
                <div className='mt-[3rem]'>
                    <img src={Estate} alt="" />
                </div>
            </div>

            <div className='py-3 mb-[2rem]'>
                <h3 className='text-4xl text-[#7F3DFF] font-bold text-center py-5'>Choose How, When and Where to Pay From </h3>

                <div className='grid md:grid-cols-3 grid-cols-1'>
                    <div className="p-10 shadow-lg py-2">
                        <p>Leave Resident with a flexible choice from of paying with just a  click on their home while we empower you with the leading cloud accounting software to balance your account </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CommunityPage
