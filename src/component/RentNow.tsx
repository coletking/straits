import React from 'react'

function RentNow() {
  return (
    <div>
        <div className="bg-[#d3e5e8]">
            <div className="flex flex-col md:flex-row max-w-[1000px] m-auto justify-between gap-6 py-9">
                <div className="flex flex-col justify-center items-center">

                    <p className='text-center text-sm'>Select your school to rent your instrument and purchase accessories, all catered for you.</p>
                    <button className='bg-[#4e9fab] text-white text-center px-8 py-3 rounded-lg mt-3'>Rent Now</button>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-center text-[#4e9fab] text-[1rem]">ACCESSORIES ONLY</h1>
                    <p className='text-center text-sm'>If you already have your instrument – Shop school approved accessory packs.</p>
                    <button className='bg-[#4e9fab] text-white text-center px-8 py-3 rounded-lg mt-3'>SHOP ACCESSORIES</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RentNow