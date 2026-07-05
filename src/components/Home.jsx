import { useState } from "react";
function Home() {

    const [first, setfirst] = useState(0)


    const noAdd = (a) => {
        setfirst(first + a)
    }

    const noSub = (a) => {
        setfirst(first-a)
    }

    const noMul = (a)=>{
      setfirst(first*a)
    }




  return (


    <div className="flex flex-col w-full items-center justify-center mt-10">
        <div className="m-4 p-2 text-2xl">
            Total count={first}
        </div>

      <div>
        <button onClick={(e)=>{
        noAdd(5)
      }} className="m-4 p-2 w-[150px] bg-pink-700 rounded-full text-white text-2xl">
        Add 5
      </button>

      <button onClick={(e)=>{
        noSub(5)
      }} className="m-4 p-2 w-[150px] bg-pink-700 rounded-full text-white text-2xl">
        Minus 5
      </button>

      <button onClick={(e)=>{
        noMul(5)
      }} className="m-4 p-2 w-[150px] bg-pink-700 rounded-full text-white text-2xl">
        Minus 5
      </button>
      </div>
    </div>
  );
}

export default Home;