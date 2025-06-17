import React from "react";

const CouplesSay = () => {
  const data = [
    {
      image: "./Venue.jpg",
      tag: "Priya & Nikhil",
      desc: "From the venue to the makeup artist, everything we needed was right here on Wedding Saathi. The planning felt effortless, and our wedding turned out magical!",
      location: "Mumbai Central, Mumbai",
    },
    {
      image: "./makeUp Artist.jpg",
      tag: "Rakesh Sharma (Father of the Bride)",
      desc: "Wedding Saathi helped us find trusted vendors quickly. Every detail was taken care of, and we could actually enjoy the planning journey.",
      location: "Mumbai Central, Mumbai",
    },
    {
      image: "./camera.jpg",
      tag: "Tanvi & Karan",
      desc: "I never thought planning a wedding could be this smooth! Thanks to Wedding Saathi, the platform was easy to use and saved us hours of calls and research.",
      location: "Mumbai Central, Mumbai",
    },
    {
      image: "./Venue.jpg",
      tag: "Riya & Tarun",
      desc: "We booked our decorator, caterer, and DJ in just a few clicks using Wedding Saathi. It made the whole experience fast, simple, and reliable.",
      location: "Mumbai Central, Mumbai",
    },
    // {
    //   image: "makeUp Artist.jpg",
    //   tag: "Sonal & Manish",
    //   desc: "We booked our decorator, caterer, and DJ in just a few clicks using Wedding Saathi. It made the whole experience fast, simple, and reliable.",
    //   location: "Mumbai Central, Mumbai",
    // },
  ];
  return (
    <div className="flex gap-4 justify-around mx-12px my-12">
      {data.map((item) => {
        return (
          <div className="w-[22rem] bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="heading flex items-center justify-between">
              <div className="topPart flex gap-2 items-center">
                <img
                  src={item.image}
                  alt=""
                  className="size-[4rem] rounded-full"
                />
                <h3 className="w-[10rem]">{item.tag}</h3>
              </div>
              <div className="flex">
                <img src="star.png" alt="star" className="p-0.5 w-6 h-6" />
                <img src="star.png" alt="star" className="p-0.5 w-6 h-6" />
                <img src="star.png" alt="star" className="p-0.5 w-6 h-6" />
                <img src="star.png" alt="star" className="p-0.5 w-6 h-6" />
                <img src="star.png" alt="star" className="p-0.5 w-6 h-6" />
              </div>
            </div>
            <div className="describe py-3">{item.desc}</div>
            <div className="loc flex gap-1 items-center py-3">
              <img src="./locationIcon.png" alt="" className="w-4 h-4" />
              <span className="text-sm">{item.location}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CouplesSay;
