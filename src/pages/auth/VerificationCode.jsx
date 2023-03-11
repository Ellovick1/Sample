import React,{useState,useEffect} from "react";

import AuthFooter from '../../components/form/AuthFooter'
import AuthNav from "../../components/form/AuthNav"
import UseVerificationCode from '../../hooks/useVerificationCode'

import { Link, useNavigate } from 'react-router-dom';


export const VerificationCode = () => {
  const [email, setEmail] = useState('');

 const {loading,success, error, verificationCode} = UseVerificationCode();
 const navigate = useNavigate();

useEffect(() => {
  setTimeout(() => {
    success && navigate('/emailVerification');
  }, 3000);
}, [navigate, success]);

// const [values,handleValues] = useState({ 
//     email: '',
  
//   })

  const handleVerification = e => { 
    e.preventDefault();
    console.log(email);
    verificationCode(email);
  }
  return (
    <div className="form h-screen md:flex flex-col sm:block justify-between bg-gray-200">
     {/* <AuthNav /> */}
    <div className="flex flex-col items-center justify-center w-full pt-4 sm:pt-12 px-3">
    {error && (
          <div
            className="max-w-md w-full mx-auto p-4 text-red-700 border-l-4 border-red-700 bg-red-50"
            role="alert"
          >
            <h3 className="text-sm font-medium">{error}</h3>
          </div>
        )}
        {success && (
          <div
            className="max-w-md w-full mx-auto p-4 text-green-700 border-l-4 border-green-700 bg-green-50"
            role="alert"
          >
            <h3 className="text-sm font-medium">Verification Sent!</h3>
          </div>
        )}
      <form 
      onSubmit = {handleVerification}
      className="max-w-md w-full mx-auto h-[30rem] bg-[#fff] rounded-md shadow-md">

        {/* CONTENT  */}
        <div className="p-7">
          <div className="text-center">
            <h1 className="text-xl tracking-wide py-1 font-semibold md:text-3xl ">
             Verification Code
            </h1>
            <p className="text-xs text-grayClrP py-3 font-medium">
            Please enter your  email to receive verification code
            </p>
          </div>
          <div>
            <div className="mx-3 mt-3 mb-3">
            <div className="grid md:grid-cols-1 grid-cols-1 md:space-x-4 space-y-2">
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-500 rounded-lg shadow-sm"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
              </div>
            </div>
            
            </div>
           
          </div>
          
          <div className="pb-3">
            <button
              className="hover:bg-hoverPurple p-2 w-full rounded-md text-white bg-themePurple"
              type="submit">
              Send Request
            </button>
            <div  className="text-center">
          
            </div>
          </div>
        </div>
      </form>
    </div>
    
    <AuthFooter />
    </div>
  );
}


