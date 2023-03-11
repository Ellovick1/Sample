import React from "react";
import SmileImg from "../../assets/residents/smile.png";
import TopAvatarImg from "../../assets/residents/topAvatar.png";
import BottomAvatarImg from "../../assets/residents/bottomAvatar.png";
import LogImg from "../../assets/residents/log.png";
import Ellipse1 from "../../assets/residents/Ellipse1.png";
import Ellipse2 from "../../assets/residents/Ellipse2.png";

const Header = () => {
  return (
    <div className="bg-white relative h-fit lg:h-[39rem] border ">
      <img src={Ellipse1} alt="" className="absolute z-10 -left-10 -top-40" />
      <img
        src={Ellipse2}
        alt=""
        className="absolute h-[400px] w-[400px] right-0 -bottom-24 "
      />
      <div className=" flex items-start max-w-7xl mx-auto px-8 ">
        <div className="flex-1 pr-10 mt-14 pb-10 relative z-20  ">
          <h1 className="text-5xl font-semibold">
            The Leading African Payment Solution for{" "}
            <span className="text-[#8672FF]">Renters</span>
          </h1>
          <p className="text-[1.3rem] text-justify mt-4">
            With Mend Virtual Wallet, you can pay rent, save for rent smalll,
            and utility bills online, hold your landlord responsible byrelative
            z-10 requesting for maintenace all in our platform. <br /> Enjoy
            personalised support all the way through.
          </p>
          <div className="flex gap-8 flex-wrap mt-12 ml-8">
            <button className="text-white bg-gradient-to-r from-[#7F3DFF] to-[#402574] px-8 py-3 rounded-lg border">
              Download the App
            </button>
            <button className="text-[#7F3DFF] border border-[#7F3DFF] px-8 py-3 rounded-lg">
              Contact our Team
            </button>
          </div>
        </div>
        <div className="flex-1 mt-16  items-center hidden lg:mt-8 md:flex">
          <img
            src={SmileImg}
            alt="img"
            className="h-[450px] hidden  lg:block"
          />
          <div className="w-fit h-fit relative">
            <img src={LogImg} alt="img" />
            <img
              src={TopAvatarImg}
              alt="img"
              className="absolute -top-8 max-h-[150px] max-w-[150px] left-[35%]"
            />
            <img
              src={BottomAvatarImg}
              alt="img"
              className="absolute -bottom-[4rem] left-[27%] h-[80px] w-[80px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
