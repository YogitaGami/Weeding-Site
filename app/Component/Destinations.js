import React from "react";

const Categories = () => {
  const data = [
    { image: "./Venue.jpg", tag: "Wedding Venues" },
    { image: "./makeUp Artist.jpg", tag: "Bribal MakeUp Artist" },
    { image: "./camera.jpg", tag: "Photo/Video" },
    { image: "./Venue.jpg", tag: "Music & DJ" },
    { image: "makeUp Artist.jpg", tag: "Catering" },
    { image: "./camera.jpg", tag: "Decors" },
  ];
  return (
    <div className="flex gap-4 justify-around mx-24 my-12 pb-[5rem]">
        {data.map((item) => {
          return (
            <>
            <div>
              <img src={item.image} alt="" className="size-[8rem] rounded-full"/>
              <h3 className="px-1 py-3 text-center">{item.tag}</h3>
              </div>
            </>
          );
        })}
      </div>
  );
};

export default Categories;
