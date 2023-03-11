import React from 'react';
import mend from '../../assets/mend.png';
import twitter from '../../assets/twitter.png';
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import name from '../../assets/name.png';

const Footer = () => {
  return (
    <div className="bg-[#001219] px-[20px] lg:px-[100px] xl:px-[200px] py-20 mt-10">
      <div className="md:flex justify-between pb-9 border-b-2 border-b-[#D9D9D9]">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center space-x-2 pb-5">
            <img src={mend} alt="logo" />
            <img src={name} alt="name" />
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <img src={twitter} alt="twitter" />
            <img src={insta} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
          </div>
          <p className="text-[#C0C0C0]">usemend@outlook.com</p>
        </div>
        <div className="md:grid grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-white font-semibold text-[23px] mb-5">Home</h1>
            <div className="space-y-3 text-[#C0C0C0]">
              <h3>Platforms</h3>
              <h3>Blog</h3>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h1 className="text-white font-semibold text-[23px] mb-5">For Properties</h1>
            <div className="space-y-3 text-[#C0C0C0]">
              <h3>Resident</h3>
              <h3>Rent</h3>
              <h3>Find Home</h3>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold text-[23px] mb-5">For Residents</h1>
            <div className="space-y-3 text-[#C0C0C0]">
              <h3>Digital Payment</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between text-[#C0C0C0] pt-16">
        <div>
          <h1>Powered by MendHQ 2023</h1>
        </div>
        <div className="flex space-x-5">
          <h1>Privacy Policy</h1>
          <h1>Terms and Conditions</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
