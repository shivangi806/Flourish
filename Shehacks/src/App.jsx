// import { useState } from 'react'
import FlourishTagline from './components/Flourish_tagline_pcos.png';
import Navbar from './components/Navbar'
import SlidingCards from './components/SlidingCardsDoctors'
import Whyflourish from './components/WhyFlourishsection';
import Hearuser from './components/Hearfromuser';
// import Homepage from './components/homepage';
function App() {

  return (
    <>
      <div><Navbar /></div>

      <div class="flex flex-col lg:flex-row justify-between items-center">
    <div id="leftPart" class="w-full lg:w-1/2 flex flex-col justify-center lg:pr-10 pl-5">
        <div class="text-2xl lg:text-4xl ml-8 text-black font-bold text-center lg:text-left">
            Personalised, Science-backed care for PCOS & Thyroid
        </div>
        <div>
            <p class="text-base lg:text-lg text-gray-700 mt-6 mb-6 ml-8 text-center lg:text-left">
                Navigating weight gain, period issues, hair loss, or fertility concerns can be overwhelming. We get it.
            </p>
        </div>

        <div class="text-center lg:text-left">
            <p class="text-sm lg:text-md text-pink-700 mt-6 mb-6 ml-8">
                Trusted by 1000+ users.
            </p>
            <button class='text-white outline-none bg-green-700 px-3 ml-8 py-1 mb-2 lg:mb-0 lg:mr-2 hover:bg-blue-500'>
                4.8★
            </button>
            <br /><br />
            <button class='text-white outline-none bg-blue-950 mx-8 px-5 py-3 rounded-xl hover:bg-blue-500'>
                Free Consultation
            </button>
        </div>
    </div>
    
    <div id="rightPart" class="w-full lg:w-1/2 mt-6 lg:mt-0">
        <img src={FlourishTagline} alt="Description of the image" class="w-full h-auto mx-auto lg:mx-0" />
    </div>
</div>


      {/* // ab hmaara why flourish div */}
      <div><Whyflourish/></div>
      <hr />
      <div><Hearuser/></div>
      
    </>
  )
}

export default App




