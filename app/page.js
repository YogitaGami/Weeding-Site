import React from "react";
import Button from "./Component/Button";
import Categories from "./Component/Categories";
import Destinations from "./Component/Destinations";
import RealWeddings from "./Component/RealWeddings"
import CouplesSay from "./Component/CouplesSay";

const page = () => {
  return (
    <div>
      <section className="sec-1 top-20 relative bg-cover bg-center h-[75vh] bg-no-repeat"
          style={{ backgroundImage: 'url("/BrideandGroom.jpg")' }}
        >
        {/* <img
          src="./BrideandGroom.jpg"
          alt=""
          className="w-full h-[80vh] object-fill relative"
        /> */}
        <div className="absolute top-[18rem] left-[24rem] flex justify-center flex-col items-center gap-2 z-10">
          <h2 className="text-4xl text-white font-bold">
            Plan Your Dream <span className="text-pink-600">Wedding</span> - All
            in One Place
          </h2>
          <p className="w-[33rem] text-white text-center font-semibold">
            Discover the best venues, top-rated vendors, bridal inspirations,
            and planning tools - just one click away.
          </p>
        </div>
        <div className="searchBar absolute flex justify-between  gap-4 -bottom-16 left-[15rem] bg-white w-[70vw]  h-40 rounded-2xl shadow p-12">
          <select
            name="vendors"
            id=""
            className="w-[21rem] border rounded-xl px-3 py-2"
          >
            <option value="1">Search For Vendors</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
          </select>
          <select
            name="vendors"
            id=""
            className="w-[21rem] border rounded-xl px-3 py-2"
          >
            <option value="1">Search Location</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
          </select>
          <Button />
        </div>
      </section>
      <section className="sec-2 bg-stone-100 h-fit pt-[14rem]">
        <h2 className="text-3xl text-center">
          Explore Top <span className="text-pink-600">Categories</span>
        </h2>
        <Categories />
        <h2 className="text-3xl text-center pt-[5rem]">
          Popular <span className="text-pink-600">Wedding </span>Destinations
        </h2>
        <Destinations />
      </section>
      <section className="real_wedding h-full pb-6">
        <div className="subheading flex justify-center items-center flex-col gap-3 px-[15rem]">
          <h2 className="text-3xl text-center">
            Real <span className="text-pink-600">Weddings</span>, Real{" "}
            <span className="text-pink-600">Magic</span>
          </h2>
          <p className="text-lg text-center">
            Get inspired by real couples who celebrated their love with
            unforgettable moments, handpicked vendors, and dreamy decor. From
            intimate home weddings to grand palace affairs-see how love stories
            come to life.
          </p>
        </div>
        <RealWeddings/>
      </section>
      <section className="sec-2 bg-stone-100 h-fit pt-[10rem]">
        <h2 className="text-3xl text-center">
          What Couples Are <span className="text-pink-600">Saying</span>
        </h2>
        <CouplesSay />
        <h2 className="text-3xl text-center pt-[5rem]">
          Popular <span className="text-pink-600">Wedding </span>Destinations
        </h2>
        <Destinations />
      </section>

    </div>
  );
};

export default page;
