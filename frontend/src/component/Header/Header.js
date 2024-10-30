import React from "react";
import { FaRegBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";



export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center font-Vazir-Regular-Font">
        <div  className="flex  gap-3 items-center ">
          <img
            className="w-[50px] h-[50px] rounded-[50%]"
            src="../Img/IMG-20210809-WA0004.jpg"
            alt=""
          />
          <div>
            <h2 className="font-Vazir-Bold-Font">حسام کمالی</h2>
            <h3 className="text-[#858585]">برنامه نویس</h3>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-whiteColor flex rounded-2xl w-[450px] h-12 items-center justify-between px-2 shadow-lg" >
            <input className=" outline-none border-none bg-unset w-full px-3 pr-5 pl-3 text-[1.1rem]" type="text" placeholder="  جست و جو کنید ..." />
            <button className="btn">جست و جو</button>
          </div>
          <button className="header-icon shadow-xl"><FaRegBell/></button>
          <button className="header-icon shadow-xl"><CiBrightnessUp/></button>
        </div>
      </div>
    </>
  );
}


// shadow-[rgba(149,157,169,0.2)_0px_8px_24px]