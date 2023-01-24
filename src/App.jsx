import { TbRotate360 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function App() {

  const [rotate, setRotate] = useState(false)

  return (
    <div className="bg-[#D9CDF7] w-[100vw] h-[100vh] flex justify-center">
      <div className="flex justify-center items-center w-[100vw] h-[100vh] sm:flex-col">
        <div className="w-[50%] relative sm:w-full">
          {
            !rotate ? (
              <>
                <TbRotate360 
                  className="absolute right-20 top-10 text-3xl cursor-pointer xl:top-7 xl:right-7 md:top-0"
                  onClick={() => {
                    setRotate(true)
                  }}  
                />
                <img src="./src/assets/sofa00.png" className="w-full"/>
              </>
            ) : (
              <>
                <AiOutlineClose 
                className="absolute right-20 top-10 text-3xl cursor-pointer xl:top-7 xl:right-7 md:top-0"
                onClick={() => {
                  setRotate(false)
                }}  
                />
                <img src="./src/assets/sofa.gif" className="w-full"/>
              </>
            )
          }
          
        </div>

        <div className="w-[50%] flex flex-col items-start font-mono sm:w-[80%]">
          <span className="text-xs text-gray-500">CÓDIGO: 42404</span>
          <h1 className="text-3xl text-[#271A45] font-bold py-2">Sofá Margot II - Rosé</h1>
          <span className="text-gray-500 mb-5">R$ 4.000</span>
          <button className="border border-gray-600 px-5 py-2 rounded-full text-[#271A45]">ADICIONAR À CESTA</button>
        </div>
      </div>
    </div>
  )
}

export default App


/*
<TbRotate360 
  className="absolute right-20 top-10 text-3xl cursor-pointer"
  onClick={() => {
    setRotate(true)
  }}  
/>
*/