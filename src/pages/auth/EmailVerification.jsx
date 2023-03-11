import React,{useState,useEffect} from "react";

import AuthFooter from '../../components/form/AuthFooter'
import AuthNav from "../../components/form/AuthNav"
import UseEmailVerification from '../../hooks/useEmailVerification'

import { Link, useNavigate } from 'react-router-dom';


export const EmailVerification = () => {

 const {loading,success, error, emailVerification} = UseEmailVerification();
 const navigate = useNavigate();

 const [seconds,setSeconds] = useState(30)

 const updateTime = () => { 
  setSeconds(30)
  const interval = setInterval(() => {
    setSeconds(seconds -1)
     console.log(seconds)
   }, 1000);
   setTimeout(() => clearInterval(interval),30000)
 }

useEffect(() => (updateTime),[])

useEffect(() => {
  setTimeout(() => {
    success && navigate('/merchant-dashboard');
  }, 3000);
}, [navigate, success]);

  const [values,handleValues] = useState({ 
    input1: '',
    input2:'',
    input3:'',
    input4:'',
    input5:'',
    input6:''
  })

  const handleVerification = e => { 
    e.preventDefault();
    console.log(values)
    emailVerification(values)
  }
  return (
    <div className="form h-screen md:flex flex-col sm:block justify-between bg-gray-200">
     <AuthNav />
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
            <h3 className="text-sm font-medium">Verification Successful!</h3>
          </div>
        )}
      <form 
      onSubmit = {handleVerification}
      className="max-w-md w-full mx-auto h-[30rem] bg-[#fff] rounded-md shadow-md">

        {/* CONTENT  */}
        <div className="p-7">
          <div className="text-center">
            <h1 className="text-xl tracking-wide py-1 font-semibold md:text-3xl ">
              Email Verification
            </h1>
            <p className="text-xs text-grayClrP py-3 font-medium">
            Please enter the 6-digit verification code that was sent <br /> to your email.
            </p>
          </div>
          <div>
            <div className="flex justify-center  mx-3 mt-3 mb-3">
              <div className="w-[30%] px-2 mb-1">
                <input
                  className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder=""
                  maxLength="1"
                  required
                  value = {values.input1}
                  onChange = {e => handleValues({...values,input1:e.target.value}) }
                />
              </div>
              <div className="w-[30%] px-2 mb-1">
                <input
                  className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder=""
                  maxLength="1"
                  required
                  value = {values.input2}
                  onChange = {e => handleValues({...values,input2:e.target.value}) }
                />
              </div>
              <div className="w-[30%] px-2 mb-1">
                <input
                  className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder=""
                  maxLength="1"
                  required
                  value = {values.input3}
                  onChange = {e => handleValues({...values,input3:e.target.value}) }
                />
              </div>
              <div className="w-[30%] px-2 mb-1">
                <input
                  className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder=""
                  maxLength="1"
                  required
                  value = {values.input4}
                  onChange = {e => handleValues({...values,input4:e.target.value}) }
                />
              </div>
              <div className="w-[30%] px-2 mb-1">
                <input
                  className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder=""
                  maxLength="1"
                  required
                  value = {values.input5}
                  onChange = {e => handleValues({...values,input5:e.target.value}) }
                />
              </div>
              <div className="w-[30%] px-2 mb-1">
                <input
                  className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder=""
                  maxLength="1"
                  required
                  value = {values.input6}
                  onChange = {e => handleValues({...values,input6:e.target.value}) }
                />
              </div>
            </div>
           
          </div>
          
          <div className="pb-3">
            <button
              className="hover:bg-hoverPurple p-2 w-full rounded-md text-white bg-themePurple"
              type="submit">
              Verify Account
            </button>
            <div  className="text-center">
            <small 
            onClick = {updateTime}
            className="text-OTPColor">Resend OTP in <span className="font-bold">00:{seconds} </span></small>
            </div>
          </div>
        </div>
      </form>
    </div>
    
    <AuthFooter />
    </div>
  );
}


