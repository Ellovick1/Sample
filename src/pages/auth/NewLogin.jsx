import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame.svg';
import AuthFooter from '../../components/form/AuthFooter';
import NewSignInFormInputs from '../../components/form/NewSignInFormInputs';

export function NewSignUpForm() {
  return (
    <div className="min-h-screen bg-gray-100 relative justify-between w-full ">
      <div>
        <nav>
          <Link to="/">
            <img className="mx-auto pt-7 md:pt-16" src={logo} alt="logo" />
          </Link>
        </nav>
      </div>
      <div className="mt-32">
        <NewSignInFormInputs />
        <div className="absolute bottom-0 w-full">
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
