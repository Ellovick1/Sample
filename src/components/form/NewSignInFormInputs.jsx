import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Success from '../Success';
import Error from '../Error';
import NewSignInModal from './NewSignInModal';
import useLogin from '../../hooks/useLogin';
import GoogleAuthentication from './GoogleAuthentication';
// import "./NewSignInFormInputs.css"

function NewSignUpFormInputs() {
  const [viewPassword, setViewPassword] = useState(true);
  const numberInput = useRef(null);
  const navigate = useNavigate();

  let setPasswordView = () => {
    setViewPassword(!viewPassword);
    viewPassword === true
      ? (numberInput.current.type = 'text')
      : (numberInput.current.type = 'password');
  };
  const { login, loading, error, success } = useLogin();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [valid, setValid] = useState(false);

  const handleEmail = () => {
    // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (!regex.test(user.email)) {
    //   setFormError({...formError,email:'invalid email'})
    // }else if(user.email === ''){
    //   setFormError({...formError,email:''})
    // }else{
    //   setFormError({...formError,email:''})
    // }
    //   const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    //   if(user.email.match(mailformat))
    //   {
    //   setEmailError(" ")
    //   }
    //   else{
    //   setEmailError("invalid email")
    //   }
  };

  useEffect(() => {
    setTimeout(() => {
      success && navigate('/merchant-dashboard');
    }, 3000);
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(user);
    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <div className="max-w-[25rem] w-full mx-auto ">
      {error && (
        <div
          class="max-w-md w-full mx-auto p-4 text-red-700 border-l-4 border-red-700 bg-red-50"
          role="alert"
        >
          <h3 class="text-sm font-medium">{error}</h3>
        </div>
      )}
      {success && (
        <div
          class="max-w-md w-full mx-auto p-4 text-green-700 border-l-4 border-green-700 bg-green-50"
          role="alert"
        >
          <h3 class="text-sm font-medium">You have successfully signed in!</h3>
        </div>
      )}

      <div className="h-fit bg-[#fff] rounded-md py-3 ">
        <h5 className="text-3xl text-center pt-4 px-8 py-4 text-[2em] font-[600]">Sign In</h5>
        <GoogleAuthentication />
        <form
          onSubmit={handleSubmit}
          className="px-4 py-5 pb-8 flex flex-col gap-[1rem] mb-8 md:mb-0"
        >
          {/* {submitted && valid ? <NewSignInModal name={email}/> :null}    */}
          <div>
            <div className="border border-grayClr flex items-center space-x-3 py-2 px-3 rounded-md">
              <i className="bi bi-envelope-fill text-grayClr"></i>
              <input
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                type="email"
                name="email"
                placeholder="Your Email"
                className="outline-none w-full bg-transparent"
                value={user.email}
                onKeyUp={handleEmail}
              />
            </div>
            {emailError && <p className="text-red-400 font-medium text-[13px]">{emailError}</p>}
          </div>

          {/* <pre classname="text-red-700">{formErrors.email}</pre> */}
          {/* {formErrors.email} */}
          <div>
            <div className="border border-grayClr py-2 px-3 rounded-md">
              <div className="flex items-center space-x-3 w-full">
                <i className="bi bi-lock-fill text-grayClr"></i>
                <input
                  type="password"
                  name="PassWord"
                  placeholder="Password"
                  className="outline-none w-full bg-transparent"
                  ref={numberInput}
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <div className="flex justify-end">
                  {viewPassword ? (
                    <i className="bi bi-eye text-grayClr" onClick={setPasswordView}></i>
                  ) : (
                    <i className="bi bi-eye-slash-fill text-grayClr" onClick={setPasswordView}></i>
                  )}
                </div>
              </div>
            </div>
            <p className="text-red-400 font-medium text-[13px]">{passwordError}</p>
          </div>

          {/* <div className="text-sm">{formErrors.PassWord}</div> */}

          <div className="flex text-sm space-x-3 items-center">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>

          <div className="flex space-x-3 items-center text-grayClr">
            <input type="checkbox" className="" />
            <p>Remember Me</p>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`bg-themePurple w-full font-bold text-white mb-3 text-sm py-2 rounded-md  ${
                loading ? 'cursor-notAllowed' : 'cursor-pointer'
              }`}
            >
              {loading ? 'loading...' : 'Submit'}
            </button>
            <p className="text-sm text-center text-gray-500 mb-4">
              Don't have an account?
              <Link className="underline pl-1" to="/sign-up">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewSignUpFormInputs;
