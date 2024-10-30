import React from "react";
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { IoCubeOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { GoChecklist } from "react-icons/go";
import { MdOutlineLocalOffer } from "react-icons/md";
import {Link, NavLink} from 'react-router-dom'

export default function SideBar() {
  return (
    <div className=" fixed h-screen flex-1 bg-blueColor ">
      <h2 className="font-Vazir-Bold-Font text-white font-bold p-4 text-right mb-4 border-b-2 border-white border-solid text-xl ">
        به داشبورد خوش آمدید
      </h2>
      <ul className="mainSidBarUl">
        <NavLink  to= "/" className="sideBar-Li sideBar-Title">
          <AiOutlineHome className="sideBar-icon" />
            صفحه اصلی
        </NavLink>
        <NavLink to = "/products" className="sideBar-Li sideBar-Title ">
          <IoCubeOutline className="sideBar-icon" />
            محصولات
        </NavLink>
        <NavLink to = "/comments" className="sideBar-Li sideBar-Title">
          <AiOutlineComment className="sideBar-icon" />
            کامنت ها
        </NavLink>
        <NavLink to = "/users" className="sideBar-Li sideBar-Title">
          <PiUsersThree  className="sideBar-icon" />
            کاربران

        </NavLink>
        <NavLink  to = "/orders" className="sideBar-Li sideBar-Title">
          <GoChecklist className="sideBar-icon" />
            سفارشات
 
        </NavLink>
        <NavLink to = "/offers" className="sideBar-Li sideBar-Title">
          <MdOutlineLocalOffer className="sideBar-icon" />
          تخفیف ها
  
        </NavLink>
      </ul>
    </div>
  );
}
