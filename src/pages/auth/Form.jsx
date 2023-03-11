import React, { useState, useRef, useEffect } from 'react';
import AuthFooter from '../../components/form/AuthFooter';
import logo from '../../assets/Frame.svg';
import GoogleAuthentication from '../../components/form/GoogleAuthentication';
import './createForm.css';
import { Link, useNavigate } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  // const [country, setCountry] = useState('');
  // const [role, setRole] = useState('');

  const { signup, error, loading, success } = useSignup();
  const navigate = useNavigate();

  const [viewPassword, setViewPassword] = useState(true);
  const numberInput = useRef(null);

  let setPasswordView = () => {
    setViewPassword(!viewPassword);
    viewPassword === true
      ? (numberInput.current.type = 'text')
      : (numberInput.current.type = 'password');
  };

  useEffect(() => {
    setTimeout(() => {
      success && navigate('/VerificationCode');
    }, 3000);
  }, [navigate, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password, phone);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div>
        <nav>
          <Link to="/">
            <img className="mx-auto pt-7 md:pt-20" src={logo} alt="logo" />
          </Link>
        </nav>
      </div>
      <div className="w-full">
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
            <h3 className="text-sm font-medium">You have successfully signed up!</h3>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mt-32 mx-auto max-h-[700px] h-full bg-[#fff] rounded-md shadow-md"
        >
          <div className="md:px-7 py-[15px] center">
            <h1 className="text-center text-xl tracking-wide py-1 font-semibold md:text-3xl ">
              Create Account
            </h1>
            <div>
              <GoogleAuthentication />
            </div>

            <div className="grid grid-cols-1 md:space-x-4 space-y-2">
              <div className="relative mt-1">
                <input
                  type="text"
                  id="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-1 md:space-x-4 space-y-2">
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-4 space-y-2">
              <div className="relative mt-1">
                <input
                  type="number"
                  id="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Password"
                  required
                  ref={numberInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <div className="flex justify-end">
                    {viewPassword ? (
                      <i className="bi bi-eye text-grayClr" onClick={setPasswordView}></i>
                    ) : (
                      <i
                        className="bi bi-eye-slash-fill text-grayClr"
                        onClick={setPasswordView}
                      ></i>
                    )}{' '}
                  </div>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 mt-4 mb-3 text-sm font-medium text-white bg-themePurple rounded-lg"
            >
              {loading ? 'Loading...' : 'Create Account'}
            </button>

            <p className="text-sm text-center text-gray-500 mb-4">
              Have an account?
              <Link className="underline pl-1" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 w-full">
        <AuthFooter />
      </div>
    </div>
  );
};
