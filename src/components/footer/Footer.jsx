import React, { useReducer } from "react";
// import { Link } from "react-router-dom";
import JoinMendImg from "../../assets/footer img/join_mend.png";
import IphoneImg from "../../assets/footer img/iPhone-13-Pro-Front.png";
import Logo from "../../assets/footer img/logo.png";
import AppleIcon from "@mui/icons-material/Apple";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const Footer = () => {
  const initialState = {
    home: false,
    about: false,
    community: false,
    social: false,
  };

  const reducer = (state, action) => {
    if (action.type === "HOME") {
      return { ...state, home: !state.home };
    }
    if (action.type == "ABOUT") {
      return { ...state, about: !state.about };
    }
    if (action.type == "COMMUNITY") {
      return { ...state, community: !state.community };
    }
    if (action.type == "SOCIAL") {
      return { ...state, social: !state.social };
    }
    return state;
  };

  const [items, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="footer">
      <div className="bg-[#EEEEEE]">
        <div
          className=" max-w-7xl mx-auto py-16 px-6  bg-no-repeat flex justify-center md:justify-end md:py-28 md:px-9"
          style={{
            backgroundImage: `url(${IphoneImg})`,
          }}>
          <div className=" flex flex-col items-center gap-6 max-w-[400px] md:max-w-[580px]">
            <img
              src={JoinMendImg}
              alt="img"
              className="max-w-[28rem] w-full mx-auto object-cover"
            />
            <p className=" text-justify break-all p-4 rounded-lg bg-white/50 text-[1.375rem] sm:leading-7 md:bg-transparent md:p-0">
              Pay rent and utility bills online and even residential/your Estate
              dues on a simple click from anywhere. That sounds great right?.
              Track your old and new residential records in a single dashbaord{" "}
            </p>
            <div className="flex items-center  w-full max-w-[80%] flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between">
              <button
                type="button"
                className="bg-[#7F3DFF] flex items-center  px-6 py-[.95rem] rounded-[15px] gap-2">
                <AppleIcon style={{ color: "white" }} />
                <span className=" text-white m-0 font-semibold text-sm">
                  App Store
                </span>
              </button>
              <button
                type="button"
                className="bg-[#402574] px-6 py-[.95rem] rounded-[15px] flex items-center gap-2">
                <FaGooglePlay style={{ color: "white" }} />
                <span className=" text-white m-0 font-semibold text-sm">
                  Google Play
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#7F3DFF] ">
        <div className="max-w-7xl mx-auto  text-white flex flex-col items-center py-10 md:justify-around md:py-20 md:items-start md:flex-row">
          <div className=" flex flex-col items-center gap-3">
            <img src={Logo} alt="logo" className="h-[70px] w-[143px]" />
            <h3 className="text-3xl">mend</h3>
            <p className=" ">&copy; Powered by MendHQ 2022</p>
          </div>

          <div className="flex flex-wrap gap-4 px-4 justify-center md:w-[60%] md:justify-between cursor-pointer md:cursor-default ">
            <div className="px-2" onClick={() => dispatch({ type: "HOME" })}>
              <h3 className="text-lg font-semibold">
                Home
                <BsChevronDown className="inline pl-1 text-xl md:hidden" />
              </h3>

              <ul
                className={`leading-[4] ${
                  items.home ? "block" : "hidden"
                } md:block `}>
                <li className="text-[.9rem]">
                  <a href="#">property</a>
                </li>
                <li className="text-[.9rem]">
                  <a href="#">utility</a>
                </li>
                <li className="text-[.9rem]">
                  <a href="#">management</a>
                </li>
              </ul>
            </div>

            <div className="px-2" onClick={() => dispatch({ type: "ABOUT" })}>
              <h3 className="text-lg font-semibold">
                About Us
                <BsChevronDown className="inline pl-1 text-xl md:hidden" />
              </h3>
              <ul
                className={`leading-[4] ${
                  items.about ? "block" : "hidden"
                } md:block`}>
                <li className="text-[.9rem]">
                  <a href="#">Resident</a>
                </li>
                <li className="text-[.9rem]">
                  <a href="#">Rent</a>
                </li>
                <li className="text-[.9rem]">
                  <a href="#">Find Home</a>
                </li>
              </ul>
            </div>

            <div
              className="px-2"
              onClick={() => dispatch({ type: "COMMUNITY" })}>
              <h3 className="text-lg font-semibold">
                Community
                <BsChevronDown className="inline pl-1 text-xl md:hidden" />
              </h3>
              <ul
                className={`leading-[4] ${
                  items.community ? "block" : "hidden"
                } md:block`}>
                <li className="text-[.9rem]">
                  <a href="#">Digital Payment</a>
                </li>
                <li className="text-[.9rem]">
                  <a href="#">usemend@outlook.com</a>
                </li>
              </ul>
            </div>

            <div className="px-2" onClick={() => dispatch({ type: "SOCIAL" })}>
              <h3 className="text-lg font-semibold ">
                Social
                <BsChevronDown className="inline pl-1 text-xl md:hidden" />
              </h3>
              <ul className={` ${items.social ? "block" : "hidden"} md:block`}>
                <li className="pb-4 "></li>
                <div className="flex gap-4 ">
                  <li className="text-[1.5rem]">
                    <a href="https://www.twitter.com/MendHq?t=L41SeLPJej8jCI1_zPRyLg&s=09">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="text-[1.5rem]">
                    <a href="https://www.instagram.com/usemendhq?igshid=ZDdkNTZiNTM=">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="text-[1.5rem]">
                    <a href="#">
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li className="text-[1.5rem]">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
