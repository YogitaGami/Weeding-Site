import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around items-center p-5 bg-white fixed w-full z-10">
        <div className="flex text-pink-600">
          <img src="./Wedding Saathi 2.png" alt="logo" />
          {/* <div className="flex flex-col">
          <h1 className="text-3xl uppercase">Wedding Saathi</h1>
          <p className="text-[10px] text-center">--Connecting You With Wedding Professionals--</p>
          </div> */}
        </div>
        <div className="navLinks flex text-black gap-5">
          <Link href={"/Home"}>Home</Link>
          <Link href={"/Home"}>Vendors</Link>
          <Link href={"/Home"}>Real Weddings</Link>
          <Link href={"/Home"}>Blog & Tips</Link>
          <Link href={"/Home"}>Offers</Link>
          <Link href={"/Home"}>Plan Your Wedding</Link>
        </div>
        <div className="flex gap-6">
            <img src="./signIn.jpg" alt="signin" />
            <button>Log In/Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
