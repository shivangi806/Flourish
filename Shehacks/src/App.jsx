// import { useState } from 'react'
import FlourishTagline from './components/Flourish_tagline_pcos.png';
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div><Navbar /></div>

      <div className="flex justify-between items-center">
        <div id="leftPart" className="w-1/2 flex flex-col justify-center pr-10 pl-5">
          <div className="text-4xl ml-8 text-black font-bold text-left">
            Personalised, Science-backed care for PCOS & Thyroid
          </div>
          <div>
          <p className="text-lg text-gray-700 mt-6 mb-6 ml-8 text-left">
            Navigating weight gain, period issues, hair loss, or fertility concerns can be overwhelming. We get it.
          </p>
          </div>

          <div>
          <p className="text-md text-pink-700 mt-6 mb-6 ml-8 text-left">
            Trusted by 1000+ users.
          </p>
          <button
           className='text-white outline-none bg-green-700 px-3 ml-8 py-1 shrink-0 hover:bg-blue-500'>4.8★
          </button>
          </div>

        </div>
        <div id="rightPart" className="w-1/2">
          <img src={FlourishTagline} alt="Description of the image" className="w-3/1 h-auto mx-auto" />
        </div>
      </div>



    </>
  )
}

export default App
