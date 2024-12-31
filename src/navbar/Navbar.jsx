import React from "react";
import { NavLink } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProduct = useSelector((state) => state.cart);
  return (
    <nav className="flex items-center justify-between bg-[#000000] w-full fixed">
      <NavLink
        to="/"
        className="bg-[#000000] flex justify-between text-white px-8 py-4 md:px-5 md:py-3"
      >
        Event
      </NavLink>
      <NavLink
        to="/cart"
        className="text-black font-bold flex items-center gap-2 bg-slate-100 rounded-lg justify-center mr-10 w-18 p-1"
      >
        <IoBagAddOutline /> {cartProduct.length}
      </NavLink>
    </nav>
  );
};

export default Navbar;
