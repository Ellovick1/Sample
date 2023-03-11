import React from 'react';

function AuthFooter() {
  return (
    <footer className="z-50 hidden px-4 py-3 justify-between items-center md:px-12 md:flex ">
      <p className="text-[#4F4F4F] ">&copy; 2023 MENDHQ. All right reserved</p>
      <div className="">
        <ul className="flex text-themePurple items-center space-x-4">
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Security</a>
          </li>
          <li>
            <a href="">Get in touch</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default AuthFooter;
