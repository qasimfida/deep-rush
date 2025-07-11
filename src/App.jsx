import './App.css'
import rush from './assets/rush.png'
import logo from "./assets/logo.png"


function App() {
  return (
    <>

      <div className={`flex w-screen min-h-screen  font-helvetica-neue bg-black `}
      >
        <div className="relative z-10 w-full px-5">
          <a href="https://deepfi.tools/" target="_blank" rel="noopener noreferrer" className="block py-6 decoration-none">
            <img src={logo} alt="deepfi" />
          </a>
          <div className="">
            <div className="relative z-10 flex flex-col items-center text-center md:mt-[144px] mt-16 ">
              <div className="flex items-center overflow-hidden content">
                <h2 className="font-bold deep-text ">DeepRush</h2>
              </div>

              <p className="text-white md:text-[22px] text-xl font-normal mb-10 mt-6 ">
                Race to win Solana</p>
              <button className="relative z-10 border border-white rounded-full px-6 md:h-[60px] h-10 text-white text-lg font-normal  transition-colors duration-200 hover:text-[#ACAFBB] flex items-center shadow-light">
                Revving Soon
              </button>
            </div>
            <div className="relative bottom-0 left-0 right-0 overflow-hidden md:-mt-7  w-[888px] max-w-full mx-auto">  
              <div className="spotlight"></div>
              <img
                src={rush}
                alt="Games Animation"
                className="z-0 w-[888px] max-w-full mx-auto relative  transform rotate-y-180"
              />
            </div>
            <footer className="fixed md:bottom-12 bottom-6 left-0 right-0 mx-auto z-10 flex flex-wrap items-center justify-center w-full gap-3 py-4 text-sm font-normal tracking-wide text-center text-[#ACAFBB] md:flex-nowrap md:flex">
              <p>©2025 DeepRush, a DeepFi Project.</p>
              <p>All Rights Reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
