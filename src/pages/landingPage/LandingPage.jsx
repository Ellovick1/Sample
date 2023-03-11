import { useState } from 'react';
import Navbar from '../../components/navbars/LatestLandingNavbar';
import hero from '../../assets/hero.png';
import line from '../../assets/line.png';
import providus from '../../assets/providusbank.png';
import flutterwave from '../../assets/flutterwave.png';
import bg from '../../assets/bg.jpeg';
import wrench from '../../assets/wrench.png';
import maintenance from '../../assets/maintenance.png';
import prop from '../../assets/prop.png';
import dash from '../../assets/dash.png';
import play from '../../assets/play.png';
import apple from '../../assets/apple.png';
import trans from '../../assets/wallet.png';
import call from '../../assets/call.png';
import priv from '../../assets/privacy.png';
import card from '../../assets/cardd.png';
import flower from '../../assets/flower.png';
import circle from '../../assets/circle.png';
import tenant from '../../assets/tenant.png';
import cards from '../../assets/cards.png';
import mobile from '../../assets/mobile.png';
import playy from '../../assets/playy.png';
import { Link } from 'react-router-dom';
import AccordionComp from '../../components/landingPage/Accordion';
import Footer from '../../components/landingPage/Footer';

export const LandingPage = () => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(true);
  const [stepFive, setStepFive] = useState(false);
  const [stepSix, setStepSix] = useState(false);
  const [video, setVideo] = useState(false);
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="md:grid grid-cols-2 gap-10 bg-white mx-6 py-20 pt-28 md:py-0 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
          <div className="md:mb-20 md:mt-20 lg:mt-52 relative">
            <div className="absolute top-0 left-0 md:left-10 animate-blob w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#0500FF80] filter blur-xl opacity-20"></div>
            <h1 className="font-semibold mb-7 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#263238] to-[#402574]">
              Use Mend to manage your rental home
            </h1>
            <p className="text-paragraph mb-5 leading-[32px] font-[400]">
              Mend is the number one technology property management app homeowners and their
              residents use to pay rent flexibly and buy maintenance that suit their needs{' '}
            </p>
            <div className="flex space-x-5">
              <Link>
                <button className="bg-gradient-to-r from-[#7F3DFF] to-[#402574] text-white rounded-[4px] px-8 py-4">
                  Get Started
                </button>
              </Link>
              <Link>
                <button className="border-2 font-[500] border-[#5E36E5] text-[#5E36E5] rounded-[4px] px-4 py-4">
                  Contact team Mend
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-10">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="px-[20px] lg:px-[100px] xl:px-[150px] bg-[#F7F7F7] py-[60px] flex items-center justify-center">
          <div>
            <h1 className="text-center mb-5 text-lg font-medium text-gray-600">Integrated with</h1>
            <div className="flex justify-center items-center md:space-x-14">
              <img className="w-[30%] sm:w-[40%] md:w-full" src={providus} alt="providus bank" />
              <img className="w-[30%] sm:w-[40%] md:w-full" src={flutterwave} alt="flutterwave" />
            </div>
          </div>
        </div>
        <div>
          <div className={`relative ${video ? 'hidden' : 'block'}`}>
            <img className="w-full" src={bg} alt="video" />
            <img
              onClick={() => {
                setVideo(true);
              }}
              className="absolute cursor-pointer w-[100px] h-[100px] top-0 bottom-0 left-0 right-0 m-auto"
              src={playy}
              alt="video"
            />
          </div>
          {video && (
            <div>
              <video controls={true}>
                <source
                  src="https://res.cloudinary.com/dkoslpj6o/video/upload/v1674860557/assets/Mend_httonu.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          )}
        </div>
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] xl:mx-[150px] py-20 border-b-2 border-b-paragraph">
          <div className="lg:grid grid-cols-2 gap-12">
            <div className="">
              <div className="relative">
                <h1 className="text-[#263238] text-[39px] font-semibold">
                  Mend for <span className="text-[#7F3DFF]">Homeowners</span>
                </h1>
                <div className="h-[2px] w-[150px] bg-black absolute left-[0px] xl:left-[180px] bottom-2"></div>
              </div>
              <div className="mt-8">
                <div
                  className={`border-l-2 duration-500 border-l-[#E3E7E8] pl-6 py-6 hover:cursor-pointer ${
                    stepOne && 'border-l-[#7F3DFF]'
                  }`}
                  onClick={() => {
                    setStepOne(!stepOne);
                    setStepTwo(false);
                    setStepThree(false);
                  }}
                >
                  <h1
                    className={`text-paragraph duration-500 text-[25px] mb-3 ${
                      stepOne && 'text-[#263238]'
                    }`}
                  >
                    Tailored property management for you
                  </h1>
                  <p className={`text-paragraph duration-500 ${stepOne && 'text-[#263238]'}`}>
                    Simple mobile app to onboard tenants, collect payments on the app, verify
                    tenants and buy maintenance that serves your residents payments conveniently{' '}
                  </p>
                </div>
                <div
                  className={`border-l-2 duration-500 border-l-[#E3E7E8] pl-6 py-6 hover:cursor-pointer ${
                    stepTwo && 'border-l-[#7F3DFF]'
                  }`}
                  onClick={() => {
                    setStepOne(false);
                    setStepTwo(!stepTwo);
                    setStepThree(false);
                  }}
                >
                  <h1
                    className={`text-paragraph duration-500 text-[25px] mb-3 ${
                      stepTwo && 'text-[#263238]'
                    }`}
                  >
                    Automated Rent Collection
                  </h1>
                  <p className={`text-paragraph duration-500 ${stepTwo && 'text-[#263238]'}`}>
                    Service charge, electricity bills, water bills and rents all catered for on
                    MendApp. Say good bye to chasing Tenants to pay for these utilities. Payments
                    automatically collected by Mend.
                  </p>
                </div>
                <div
                  className={`border-l-2 duration-500 border-l-[#E3E7E8] pl-6 py-6 hover:cursor-pointer ${
                    stepThree && 'border-l-[#7F3DFF]'
                  }`}
                  onClick={() => {
                    setStepOne(false);
                    setStepTwo(false);
                    setStepThree(!stepThree);
                  }}
                >
                  <h1
                    className={`text-paragraph duration-500 text-[25px] mb-3 ${
                      stepThree && 'text-[#263238]'
                    }`}
                  >
                    Verify and Move-in Tenants
                  </h1>
                  <p className={`text-paragraph duration-500 ${stepThree && 'text-[#263238]'}`}>
                    Seamlessly verify the identity and the financial strength of your tenants
                    facilitating an easy move -in , only on MendApp
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              {stepOne && (
                <img className="2xl:w-[70%] mt-36 xl:mt-20 2xl:mt-10" src={mobile} alt="mobile" />
              )}
              {stepTwo && (
                <img className="2xl:w-[70%] mt-36 xl:mt-20 2xl:mt-10" src={cards} alt="cards" />
              )}
              {stepThree && (
                <img className="w-[80%] mt-36 xl:mt-20 2xl:mt-10" src={tenant} alt="mobile" />
              )}
            </div>
          </div>
        </div>
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] xl:mx-[150px] py-20 border-b-2 border-b-paragraph">
          <div className="lg:grid grid-cols-2 gap-12">
            <div className="">
              <div className="">
                <h1 className="text-[#263238] text-[39px] font-semibold">
                  Mend for {'   '}
                  <span className="text-[#7F3DFF] relative">
                    Residents
                    <img
                      className="absolute w-full top-[-15px] right-0"
                      alt="highlight"
                      src={circle}
                    />
                  </span>
                </h1>
              </div>
              <div className="mt-8">
                <div
                  className={`border-l-2 duration-500 border-l-[#E3E7E8] pl-6 py-6 hover:cursor-pointer ${
                    stepFour && 'border-l-[#7F3DFF]'
                  }`}
                  onClick={() => {
                    setStepFour(!stepFour);
                    setStepFive(false);
                    setStepSix(false);
                  }}
                >
                  <h1
                    className={`text-paragraph duration-500 text-[25px] mb-3 ${
                      stepFour && 'text-[#263238]'
                    }`}
                  >
                    Save for Rent
                  </h1>
                  <p className={`text-paragraph duration-500 ${stepFour && 'text-[#263238]'}`}>
                    Save your rent on daily or on a weekly basis and pay when rent is due. We know
                    paying for rent can be hard but saving in bits makes the pay up easier . We’ve
                    got you.
                  </p>
                </div>
                <div
                  className={`border-l-2 duration-500 border-l-[#E3E7E8] pl-6 py-6 hover:cursor-pointer ${
                    stepFive && 'border-l-[#7F3DFF]'
                  }`}
                  onClick={() => {
                    setStepFour(false);
                    setStepFive(!stepFive);
                    setStepSix(false);
                  }}
                >
                  <h1
                    className={`text-paragraph duration-500 text-[25px] mb-3 ${
                      stepFive && 'text-[#263238]'
                    }`}
                  >
                    Request for maintenance
                  </h1>
                  <p className={`text-paragraph duration-500 ${stepFive && 'text-[#263238]'}`}>
                    Simple mobile app to onboard tenants, collect payments on the app, verify
                    tenants and buy maintenance that serves your residents payments conveniently
                  </p>
                </div>
                <div
                  className={`border-l-2 duration-500 border-l-[#E3E7E8] pl-6 py-6 hover:cursor-pointer ${
                    stepSix && 'border-l-[#7F3DFF]'
                  }`}
                  onClick={() => {
                    setStepFour(false);
                    setStepFive(false);
                    setStepSix(!stepSix);
                  }}
                >
                  <h1
                    className={`text-paragraph duration-500 text-[25px] mb-3 ${
                      stepSix && 'text-[#263238]'
                    }`}
                  >
                    Seamless Payment
                  </h1>
                  <p className={`text-paragraph duration-500 ${stepSix && 'text-[#263238]'}`}>
                    Pay rent and utility bills online from anywhere even Residential/Estate dues .
                    That sounds great right? Track all residential records on a single dashboard .
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                className="w-[100%] mt-36 xl:mt-20 2xl:w-[70%] 2xl:mt-10"
                src={flower}
                alt="residents"
              />
            </div>
          </div>
        </div>
        <div className="px-[20px] lg:px-[100px] xl:px-[150px] text-center py-14 md:py-20">
          <img className="mx-auto mb-3" src={line} alt="line" />
          <h1 className="text-[#263238] text-[30px] md:text-[39px] font-semibold">
            Mend for <span className="text-[#7F3DFF]">Property Managers</span>
          </h1>
          <div className="md:grid grid-cols-3 gap-12 my-10 space-y-5 md:space-y-0">
            <div className="mx-auto duration-500 gradient__border p-4 hover:cursor-pointer">
              <div className="rounded-full w-16 mx-auto p-4 border border-paragraph mb-2">
                <img className="mx-auto" src={wrench} alt="management" />
              </div>

              <h1 className="text-[#5A5A5A] hover:text-[#263238] duration-500 mb-2 text-[25px] text-center">
                Digital Management Tool
              </h1>
              <p className="text-paragraph text-[16px]">
                Get an overview of your portfolio property in a single pocket app, Mend. Send
                professional payment invoice, verify Tenant identity and many more
              </p>
            </div>
            <div className="mx-auto duration-500 gradient__border p-4 hover:cursor-pointer">
              <div className="rounded-full w-16 mx-auto p-4 border border-paragraph mb-2">
                <img className="mx-auto" src={maintenance} alt="management" />
              </div>

              <h1 className="text-[#5A5A5A] hover:text-[#263238] duration-500 mb-2 text-[25px] text-center">
                Maintenance Plan
              </h1>
              <p className="text-paragraph text-[16px]">
                Attending to resident’s maintenance needs just got faster. But a maintenance package
                to take care of your property management. It’s a win - win.
              </p>
            </div>
            <div className="mx-auto duration-500 gradient__border p-4 hover:cursor-pointer">
              <div className="rounded-full w-16 mx-auto p-4 border border-paragraph mb-2">
                <img className="mx-auto" src={prop} alt="management" />
              </div>

              <h1 className="text-[#5A5A5A] hover:text-[#263238] duration-500 mb-2 text-[25px] text-center">
                Property Rent Guaranteed
              </h1>
              <p className="text-paragraph text-[16px]">
                Residents get to pay on-time by offering them flexible payment scheduling, credit
                reporting and other financial stabilizers. Mend pays you whilst residents pay us.
              </p>
              <div className="bg-[#7F3DFF] text-white rounded-full px-3 text-sm py-2 w-[115px] mx-auto mt-5">
                Coming soon
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] xl:mx-[150px] bg-[#7F3DFF] rounded-xl pt-14 md:pt-20 px-5 xsm:px-10 md:px-36 pb-0 mb-0">
          <div className="md:flex items-center justify-center md:space-x-28">
            <div>
              <h1 className="mb-7 text-[25px] md:text-[45px] text-[#263238] leading-[48px] font-semibold">
                Download Mend for <br />{' '}
                <span className="text-white">Everything Property 4 You</span>
              </h1>
              <div className="sm:flex items-center space-y-5 md:space-y-0 sm:space-x-5">
                <button className="flex bg-transparent border-2 hover:cursor-pointer rounded-md border-white items-center justify-center text-white px-4 py-4 h-[72px]">
                  <img className="mr-3" src={play} alt="play" /> Google Play Store
                </button>
                <button className="flex bg-white h-[72px] w-[150px] md:w-[206px] hover:cursor-pointer rounded-md items-center justify-center text-[#001219]">
                  <img className="mr-3" src={apple} alt="play" /> Apple Store
                </button>
              </div>
            </div>
            <div className="mt-8 mx-auto md:mx-0 md:mt-0">
              <img className="w-full" src={dash} alt="dashboard" />
            </div>
          </div>
        </div>
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] xl:mx-[150px] mt-20">
          <div>
            <h1 className="text-[#263238] text-center font-semibold text-[35px]">
              Why choose Mend
            </h1>
          </div>
          <div className="md:grid grid-cols-2 gap-8 mt-8 md:mt-16 md:mx-14 space-y-5 md:space-y-0">
            <div className="bg-[#F9F5FF] p-10 rounded-lg">
              <img className="mb-2" src={trans} alt="Transparent services" />
              <h1 className="text-lg mb-3 text-[#5A5A5A]">Transparent services </h1>
              <p className="text-paragraph">
                Get overview of your portfolio property in a single pocket App. Send professional
                payment invoice, verify tenant identity, collect payment etc{' '}
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-10 rounded-lg">
              <img className="mb-2" src={priv} alt="Your data is protected" />
              <h1 className="text-lg mb-3 text-[#5A5A5A]">Your data is protected</h1>
              <p className="text-paragraph">
                Get overview of your portfolio property in a single pocket App. Send professional
                payment invoice, verify tenant identity, collect payment etc{' '}
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-10 rounded-lg">
              <img className="mb-2" src={card} alt="Flexible payment" />
              <h1 className="text-lg mb-3 text-[#5A5A5A]">Flexible payment </h1>
              <p className="text-paragraph">
                We give you the opportunity to pay rent in installment without breaking the bank
              </p>
            </div>
            <div className="bg-[#F9F5FF] p-10 rounded-lg">
              <img className="mb-2" src={call} alt="24/7 Customer support" />
              <h1 className="text-lg mb-3 text-[#5A5A5A]">24/7 Customer support </h1>
              <p className="text-paragraph">
                Customer Success is our priority. We’re here to help you and your business succeed.
                Chat with us via whatsapp, email or call us directly
              </p>
            </div>
          </div>
        </div>
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] xl:mx-[150px] mt-20">
          <div>
            <h1 className="text-[#263238] text-center font-semibold text-[35px]">
              Frequently Asked Questions (FAQs)
            </h1>
          </div>
          <div>
             <AccordionComp />
          </div>
        </div>
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] xl:mx-[150px] mt-20">
          <div>
            <h1 className="text-[#263238] text-center font-semibold text-[35px]">
              Join Mend Community
            </h1>
          </div>
          <div className="">
            <form className="mx-auto sm:flex sm:space-x-5 items-center justify-center mt-10 px-[20px] space-y-5 sm:space-y-0">
              <input
                className="p-3 rounded-md border w-full md:w-[400px] outline-none"
                placeholder="Enter your email address"
              />
              <button className="bg-[#7F3DFF] w-full md:w-[200px] p-3 rounded-md text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
