import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <body className="top-20 pt-[15vh] flex justify-center items-center gap-3 w-full">
          <div className="border bg-gray-800 rounded-md p-5 text-white w-1/3 flex flex-col gap-5" >
            <h1 className=" font-black text-left text-2xl">Find the perfect destination</h1>
            <h3>
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </h3>
            <button className="font-bold text-xl bg-gray-500 rounded-md py-2 px-3 ml-auto hover:bg-white hover:text-blue-700" >View More</button>
          </div>
          <div className="w-1/3">
            <img className="rounded-md" src="https://assets.ltkcontent.com/images/931046/goldengatebridge_27c5571306.jpg" title="carousel" alt="carousel"></img>
          </div>
        </body>
        <footer className="fixed bottom-0 w-full flex justify-between p-2  bg-gray-500 items-center">
          <section>
            <h1 className=" font-medium text-lg ">MyTinerary</h1>
            <img src="#" alt="logo" />
          </section>
          <section className="flex flex-col">
            <a href="#">
              Contact Us
            </a>
            <p>Franco Godoy</p>
            <p>AP MERN 07 TN</p>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
