import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import CallToAction from '../components/CallToAction'
import Navbar from "../components/navbars/LatestLandingNavbar";
import Footer from "../components/footer/Footer";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0we2dx8', 'Usemend', form.current, 'u8g6gc4dt5tpf1P9U')
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS');
        
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);
  // let style = {
  //   backgroundImage: `url(" /images/contact-bg.svg")`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center"
  // }
  return (
    <div>
      <Navbar />
      <div className='md:grid grid-cols-2 md:h-[100vh] gap-8 md:px-20'>
        <div className='mt-16 md:py-24'>
          <h1 className='font-semibold text-center md:text-left text-2xl md:text-4xl text-[black]'>Let's chat. <br /> Tell us anything you want, we'll try our best to respond 😊</h1>
          <div className='md:mx-0 mx-auto w-64 rounded-lg shadow-md shadow-gray-200 hover:border-2 border-purple-700 px-10 md:px-12 md:py-5 py-3 mt-8'>
          <a href='mailto:hello@mend.com'>
            <div className='flex'>
                <div className='mr-5 my-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className='text-black'>Mail us at</p>
                  <p className='text-black'>usemend@outlook.com</p>
                </div>
              </div>
          </a>
          </div>
        </div>
        <div className='px-5 md:px-0 mx-auto my-20'>
        {status && renderAlert()}
          <form className='py-8 md:p-14 border-2 border-gray-200 rounded-lg text-center'  ref={form} onSubmit={sendEmail}>
            <h1 className='font-medium text-black text-2xl mb-5'>Send us a message 🚀</h1>
            
            <input className='outline-[#4038e429] outline-dashed py-2 px-5 w-96 rounded-md' type="text" name="user_name" placeholder="Full name*" required /><br /><br />
            <input className='outline-[#4038e429] outline-dashed py-2 px-5 w-96 rounded-md' type="email" name="user_email" placeholder="Email address*" required /><br /><br />
            <input className='outline-[#4038e429] outline-dashed py-2 px-5 w-96 rounded-md' type="text" name="user_subject" placeholder="Subject" /><br /><br />
            <p className='text-black '>
              What message do you have for us?
            </p>
            <textarea className='outline-[#4038e429] w-96 px-5 py-3 outline-dashed rounded-md mt-2' rows="4" cols="50" name="message" required/>

            <div className='flex justify-center mt-3'>
                    <button type="submit" value="Send" className='bg-[#7F3DFF] hover:bg-[#8a50ff] rounded-lg px-[4rem] py-2 text-white '>Send</button>
                </div>
          </form>
        </div>
      </div>
      <div>
     
        {/* <CallToAction /> */}
        <Footer />
      </div>
    </div>
  )
  
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-green bg-gray shadow rounded mb-5 text-center ">
    <p>Your message has been submitted successfully</p>
  </div>
)