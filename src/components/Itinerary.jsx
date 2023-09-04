import { useState } from "react";

const Itinerary = ({data}) => {

  const [expanded, setExpanded] = useState(false);
  
  const price = []
  for (let i = 0; i < data.price; i++) {
      price.push(i)
  }

  return (
      <div className="" >

          <div className="flex flex-col">
            <img src={data.photo} alt={data.name} className="w-[25wv] h-[10wv]"/>
            <h1>{data.name}</h1>
            <div className="tags">
                {data.tematicHashtags.map((tag, index)=>{
                    return(
                        <p key={index}>{tag}</p>
                    )
                })}
            </div>
              <div className="flex">
                  <img src={data.authorPhoto} alt={data.authorName} className="w-5 h-5 rounded-full"/>
                  <h3>{data.authorName}</h3>
              </div>
              <h5>Price:
              {
                  price.map(() => {
                      return (
                        <p>💸</p>
                      )
                  })
              }   
              </h5>
              <h5>Duration: {data.duration}hs.</h5>
          </div>
          <div>
            <p onClick={()=>{setExpanded(!expanded)}} className=" cursor-pointer text-blue-200 bg-blue-950 text-center py-1 px-2 rounded-md hover:bg-blue-100 border border-blue-950 hover:text-blue-950 hover:shadow-lg w-auto text-lg">
              View More
            </p>
            <div className={expanded ? 'expanded' : 'hidden'}>
              <div>
                  <h2>Coming soon</h2>
              </div>
          </div>
          </div>
      </div>
  )
}

export default Itinerary
