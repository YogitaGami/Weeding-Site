import React from "react";

const Categories = () => {
  const data = [
    {
      image: "./Venue.jpg",
      heading: "Anaya & Kunal – Udaipur",
      desc: "A royal celebration in the City of Lakes with heritage vibes and floral fantasy..",
      Venue: "Taj Aravali",
      Planner: "DreamKnots",
      Photographer: "LensTown",
    },
    {
      image: "./makeUp Artist.jpg",
      heading: "Mira & Raghav – Goa",
      desc: "A beach-side mehndi, sunset pheras, and vibrant tropical decor made this wedding unforgettable.",
      Venue: "Novotel Goa",
      Planner: "Glam by Neha",
      Photographer: "Petal & Pine",
    },
    {
      image: "./camera.jpg",
      heading: "Sanya & Aarav – Delhi",
      desc: "Elegant pastel themes, live Sufi music, and a candlelit reception created timeless charm.",
      Venue: "Taj Aravali",
      Planner: "DreamKnots",
      Photographer: "LensTown",
    },
    {
      image: "./Venue.jpg",
      heading: "Anaya & Kunal – Udaipur",
      desc: "A royal celebration in the City of Lakes with heritage vibes and floral fantasy.",
      Venue: "Taj Aravali",
      Planner: "DreamKnots",
      Photographer: "LensTown",
    },
  ];
  return (
    <div className="flex gap-4 justify-around mx-24 my-12 ">
      {data.map((item) => {
        return (
          <>
            <div className="bg-white rounded-xl shadow w-[19rem] relative pb-5">
              <img
                src={item.image}
                alt=""
                className="w-[19rem] h-[10rem] rounded-xl"
              />
              <div className="p-4">
                <h3 className="text-lg">{item.heading}</h3>
                <p>{item.desc}</p>
                <div className="py-4">
                  <span className="font-semibold">Venue</span>: {item.Venue}
                  <span className="font-semibold"> Planner</span>:{" "}
                  {item.Planner}
                  <span className="font-semibold"> Decor</span>:{" "}
                  {item.Photographer}
                </div>
                <button className="absolute bottom-4 right-2 text-pink-400 text-sm hover:text-pink-600 ">
                  View more
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
