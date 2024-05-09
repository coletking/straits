import React from 'react'

function RentalsBanner() {
  return (
    <div><div className="bg-gray-800 ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="md:m-3 lg:m-9 m-2 h-fit ">
        <img src="/image/r1.jpg" alt="" />
      </div>
      <div className="w-full">
        <div className="text-[#4e9fab] text-[0.8rem] md:text-[1.7rem] font-bold uppercase pt-10 flex justify-center items-center">
          Instrument Rentals at Strait Music
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-7 mt-7">
          <div className="flex flex-col justify-between items-center mx-5">
            <p className="text-center text-white text-[0.8rem] md:text-[1rem] leading-[2rem]   my-[0.3rem] md:my-[1rem]">We are a family owned local business serving central Texas for over 60 years and counting.</p>
            <p className="text-center text-white text-[0.8rem] md:text-[1rem]  leading-[2rem]  my-[0.3rem] md:my-[1rem]">We offer no-interest, month-to-month rentals where payments apply to purchase/ownership.</p>
            <p className="text-center text-white text-[0.8rem] md:text-[1rem]  leading-[2rem]  my-[0.3rem] md:my-[1rem]">Repair and maintenance are free when renting, Our in-house technicians are the best in the state.</p>

          </div>
          <div className="flex flex-col justify-between items-center mx-5">
          <p className="text-center text-white text-[0.8rem] md:text-[1rem]  leading-[2rem]  my-[0.3rem] md:my-[1rem]">We have award-winning customer service in-store, at school, online and by e-mail or text.</p>
          <p className="text-center text-white text-[0.8rem] md:text-[1rem]  leading-[2rem]  my-[0.3rem] md:my-[1rem]">There are no contract lengths, return your rental instrument any time without penalty.</p>
          <p className="text-center text-white text-[0.8rem] md:text-[1rem]  leading-[2rem]  my-[0.3rem] md:my-[1rem]">Pay off your instrument at anytime with a 30% discount off your remaining balance!</p>
  
          </div>
        </div>

        <div className="text-[#4e9fab] text-[0.8rem] md:text-[1rem] font-bold uppercase py-5 flex justify-center items-center">Frequently Asked Questions</div>
      </div>
    </div>
  </div></div>
  )
}

export default RentalsBanner