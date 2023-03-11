import React from 'react'
import Nav from '../../components/navbars/LatestLandingNavbar'
import PropertyImage from "../../assets/properties.png"
import PropertyManager from "../../assets/propertymanager-icon.png"
import PersonalisedDashboard from "../../assets/personalizedDashboard-icon.png"
import RentalScreening from "../../assets/rentalScreening-icon.png"
import Communication from "../../assets/communication-icon.png"
import Fintech from "../../assets/fintech-icon.png"
import SeamlessDocumentation from "../../assets/seamlessDocumentation-icon.png"
import TransitionIcon from "../../assets/transition-icon.png"
import LegalServices from "../../assets/legalServices-icon.png"
import TenantImage from "../../assets/tenant-image.png"
import CareTaker from "../../assets/careTaker.png"
import Footer from "../../components/footer/Footer.jsx"
import "../NewProperties.css";

export const Platforms = () => {
  return (
    <div>
      <Nav />
      <div className='max-w-7xl mx-auto py-[3rem] px-6'>
        <div className='py-3 flex flex-wrap justify-between'>
          <div className='md:mt-[4rem] space-y-3 md:space-y-5 mb-7'>
            <div>
              <h1 className='md:text-4xl text-left text-2xl font-[500] '>Looking for property Management</h1>
              <h1 className='md:text-4xl text-left text-2xl text-[#2b2733]'>For your Rental Home?</h1>
            </div>
            <p className='md:py-3 py-1'>We take care of your properties using <br /> the best practices and technology</p>
            <button className='text-[#7F3DFF] border border-[#7F3DFF] pt-[5px] pb-[5px] pl-[20px] pr-[20px] rounded-lg'>Get Started</button>
          </div>
          <div>
            <img src={PropertyImage} alt="" />
          </div>
        </div>

        <div className="mt-[7rem] py-4 grid md:grid-cols-3 grid-cols-1 md:space-x-7">
          <div className="text-center items-center text-white rounded-lg bg-[#3E00B9] p-5 mb-4">
            <h5 className="text-white font-bold py-4">Find Tenants</h5>
            <p className="text-center">Our intensive marketing and extensive associate network helps in finding right Tenants</p>
          </div>
          <div className="text-center items-center text-white rounded-lg bg-[#200060] p-5 mb-4">
            <h5 className="text-white font-bold py-4">Manage Property</h5>
            <p>We manage your property 365 days a year and take care of all on-demand requests</p>
          </div>
          <div className="text-center items-center text-white rounded-lg bg-[#9E616A] p-5 mb-4">
            <h5 className="text-white font-bold py-4">Annual Fee</h5>
            <p>Subscription based off your Annual rental Customized subcription to meet your need</p>
          </div>
        </div>

        <div className="mt-5 py-5">
          <div className='py-4'>
            <h3 className="text-center text-[1rem] md:text-4xl font-bold text-#200060">Why Subscribe to Mend Property Manager</h3>
          </div>


          <div className="w-[60%] p-4 whyMend rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={PropertyManager} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Dedicated Property Manager</h5>
              <p className="py-1 text-center">We assign a single contact for all your interaction with us across service requests</p>
            </div>
          </div>


          <div className="w-[60%] p-4 whyMend2 rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={PersonalisedDashboard} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Access to Personalized Dashboard</h5>
              <p className="py-1 text-center">Our dashboard includes online document vault, expense tracker, property reports and more, <br /> accessible at the click of a button!</p>
            </div>
          </div>

          <div className="w-[60%] p-4 whyMend rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={RentalScreening} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Rental Screening</h5>
              <p className="py-1 text-center">Our in-depth knowledge of prevailing rentals along with data on recent transactions helps you in  ascertaining the <br /> right Rental for your property</p>
            </div>
          </div>


          <div className="w-[60%] p-4 whyMend2 rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={Communication} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Easy Communication and Collaboration</h5>
              <p className="py-1 text-center">Easy communication with your team on a single dashboard, our virtual customers service communicates with your tenants <br /> 24/7 giving them that attention they require</p>
            </div>
          </div>



          <div className="w-[60%] p-4 whyMend rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={Fintech} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Tailored Fintech Solutions to Serve You </h5>
              <p className="py-1 text-center">Simple Payments, Simple Payments enables residents to conveniently purchase any item <br /> and service from the estate on their mobile or desktop computer.</p>
            </div>
          </div>


          <div className="w-[60%] p-4 whyMend2 rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={SeamlessDocumentation} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Seamless Documentation and Execution</h5>
              <p className="py-1 text-center">Agreement drafting and registration, police verification, Society Approvals - we provide you with thorough professional execution <br /> through the process.</p>
            </div>
          </div>
          <div className="w-[60%] p-4 whyMend rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={TransitionIcon} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Simple and Easy Transition</h5>
              <p className="py-1 text-center">We provide detailed inspection reports for every move in and move out for a flawless transition <br /> between clients.</p>
            </div>
          </div>

          <div className="w-[60%] p-4 whyMend2 rounded-[1.5rem] mt-3 mb-6">
            <div className="text-end flex justify-end card-img">
              <img src={LegalServices} alt="" width="100px" height="auto" />
            </div>
            <div className="text-center items-center text-black card-text">
              <h5 className="font-bold py-4 text-[1rem] md:text-3xl">Legal Services</h5>
              <p className="py-1 text-center">We provide legal services ranging from tenancy agreement quite notice and other necessary legal documents</p>
            </div>
          </div>
        </div>

        <div>
          <div className='text-center'>
            <h3 className='font-bold text-xl md:text-4xl'> What Our People are saying</h3>
          </div>

          <div className="mt-[4rem] py-4 grid md:grid-cols-3 grid-cols-1 gap-3 md:space-x-7">
          <div className="text-center items-center shadow-md border border-sm rounded-lg p-5">
            <p>Our intensive online marketing & extensive associate network helps in finding Right Tenants</p>
          </div>
          <div className="text-center items-center shadow-md border border-sm rounded-lg p-5">
            <p>We manage your property 365 days a year and take care of all on-demand requests</p>
          </div>
          <div className="text-center items-center shadow-md border border-sm rounded-lg p-5">
            <p>We manage your property 365 days a year and take care of all on-demand requests</p>
          </div>
         
        </div>
        </div>


        <div className='py-7'>
          <div className="py-5">
            <h5 className='font-bold text-center text-[1rem] md:text-3xl text-[#7F3DFF]'>We have the whole team on board! </h5>
            <h5 className='font-bold text-center text-[1rem] md:text-3xl text-[#7F3DFF]'>Everybody gets a free account.</h5>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 mx-auto py-5 items-center text-center">
            <div className='ml-auto mb-3'>
              <img src={TenantImage} alt="" width="70%" className='m-auto'/>
            </div>
            <div className='text-center items-center mb-3'>
              <img src={CareTaker} alt="" width="70%" className='m-auto'/>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

