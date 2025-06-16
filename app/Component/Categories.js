import React from "react";

const Categories = () => {
  const data = [
    { image: "", tag: "Wedding Venues" },
    { image: "", tag: "Bribal MakeUp Artist" },
    { image: "", tag: "Photo/Video" },
    { image: "", tag: "Music & DJ" },
    { image: "", tag: "Catering" },
    { image: "", tag: "Decors" },
  ];
  return (
    <div className="flex gap-4">
      
        {data.map((item) => {
          return (
            <>
            <div className="bg-white rounded-xl">
              <img src={item.image} alt="" />
              <h3>{item.tag}</h3>
              </div>
            </>
          );
        })}
      </div>
  );
};

export default Categories;
