import React from "react";
import Navbar from "./Component/Navbar";
import Button from "./Component/Button";
import Categories from "./Component/Categories";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="sec-1 pt-20">
        <img
          src="./BrideandGroom.jpg"
          alt=""
          className="w-full h-[80vh] object-fill relative"
        />
        <div className="absolute top-[25rem] left-[24rem] flex justify-center flex-col items-center gap-2">
          <h2 className="text-4xl text-white font-bold">
            Plan Your Dream <span className="text-pink-600">Wedding</span> - All
            in One Place
          </h2>
          <p className="w-[33rem] text-white text-center font-semibold">
            Discover the best venues, top-rated vendors, bridal inspirations,
            and planning tools - just one click away.
          </p>
        </div>
        <div className="searchBar absolute flex justify-around  gap-4 bottom-2 left-[15rem] bg-white w-[70vw]  h-40 rounded-2xl shadow p-12">
          <select name="vendors" id="" className="w-[18rem] border rounded-xl px-3 py-2">
            <option value="1">Search For Vendors</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
          </select>
          <select name="vendors" id="" className="w-[18rem] border rounded-xl px-3 py-2">
            <option value="1">Search Location</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
          </select>
          <Button />
        </div>
      </section>
      <section className="sec-2 bg-stone-100 h-[60vh] py-[12rem]">
        <h2 className="text-3xl text-center">Explore Top <span className="text-pink-600">Categories</span></h2>
          <Categories/>
      </section>
    </div>
  );
};

export default page;
