import React from 'react';

function Whyflourish() {
    return (
        <div className="mt-20 justify-center items-center text-center">
            <div className="text-4xl mb-3 text-black font-bold">Why Flourish ?</div>

            <div className="text-4xl mt-16 mb-3 text-black font-bold flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-1/4">
                    <img src="https://uvihealth.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscienceback.0de7506a.png&w=256&q=75" alt="" className="h-30 w-auto mb-1" />
                    <p className="text-lg text-gray-700 mt-2">Personalised Care Plans</p>
                </div>

                <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-1/4">
                    <img src="https://uvihealth.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwholebody-new.61c3f3b5.png&w=256&q=75" alt="" className="h-30 w-auto mb-1" />
                    <p className="text-lg text-gray-700 mt-2">Health Coach Support</p>
                </div>

                <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-1/4">
                    <img src="https://uvihealth.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonalized.98ffe3f7.png&w=256&q=75" alt="" className="h-30 w-auto mb-1" />
                    <p className="text-lg text-gray-700 mt-2">Science-backed Care</p>
                </div>

                <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-1/4">
                    <img src="https://uvihealth.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoalsbased.e4cad66b.png&w=256&q=75" alt="" className="h-30 w-auto mb-1" />
                    <p className="text-lg text-gray-700 mt-2">Goals Based Approach</p>
                </div>
            </div>
        </div>
    );
}

export default Whyflourish;
