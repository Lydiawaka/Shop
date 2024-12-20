
export default function Sale() {
    return (
      <div>
        <div className="bg-yellow-700 text-white text-center py-2">THE LAUNCH SALE: UP TO 40% OFF</div>
          <div className="flex justify-between items-center px-5 py-2">
              <div className="text-2xl font-bold">Welcome!!</div>
          </div>
      
      
          
          <div className="bg-yellow-500 rounded-full w-72 h-72 mx-auto flex flex-col justify-center items-center">
              <div className="my-2">2 STYLES<br/>20% OFF</div>
              <div className="my-2">3 STYLES<br/>30% OFF</div>
              <div className="my-2">5 STYLES OR MORE<br/>40% OFF</div>
              <button className="bg-yellow-500 text-black border-none px-5 py-2 text-lg mt-10 cursor-pointer transition hover:bg-gray-300">SHOP NOW</button>
          </div>
      </div>
    );
  }
  