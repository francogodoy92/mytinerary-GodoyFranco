import { useState } from "react";

const Itinerary = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const price = [];
  for (let i = 0; i < data.price; i++) {
    price.push(i);
  }

  return (
    <div className="text-blue-950 border-4 rounded-xl p-2">
      <img
        src={data.photo}
        alt={data.name}
        className="w-80 max-h-40 rounded-md shadow-md border object-cover"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold text-center">{data.name}</p>
          <p className="font-medium text-center"><span className="text-black">Likes: </span>{data.likes}</p>
        </div>
        <div className="flex align-center gap-2 items-center">
          <img
            src={data.authorPhoto}
            alt={data.authorName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h3 className="font-semibold text-xl text-black">
            {data.authorName}
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex font-medium text-black ">
            <span className="underline">Price:</span>
            {price.map(() => {
              return <p>💸</p>;
            })}
          </p>
          <p className="font-bold text-2xl">/</p>
          <p className="font-medium">
            <span className="text-black underline">Duration:</span>{" "}
            {data.duration}hs.
          </p>
        </div>
        <div className="flex gap-2 font-medium text-blue-950">
          {data.tematicHashtags.map((tag, index) => {
            return <p key={index}>{tag}</p>;
          })}
        </div>
        <div>
          <p
            onClick={() => {
              setExpanded(!expanded);
            }}
            className=" cursor-pointer text-blue-200 bg-blue-950 text-center py-1 px-2 rounded-md hover:bg-blue-100 border border-blue-950 hover:text-blue-950 hover:shadow-lg w-auto text-lg"
          >
            View More
          </p>
          <div className={expanded ? "expanded" : "hidden"}>
            <div>
              <p className="text-center text-black font-medium">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
