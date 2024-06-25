import { MdFormatColorText, MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";

function CallNow() {
  return (
    <div>
        <div className="">
        <div className="max-w-[1000px] m-auto py-7">
      <h1 className="font-bold text-center text-[#4e9fab] text-[1.5rem]">Questions ?</h1>
      <p className="text-center">Contact us for more info!</p>
      <div className="flex justify-center items-center">
      <div className="flex justify-center text-center w-full flex-col ml-8 md:flex-row pt-4">
        <a href="sms:+17022952693" className='flex items-center gap-4'>
          <button className='bg-yellow-400 text-black font-bold text-center px-8 py-3 rounded-lg mt-3 text-[1.3rem] flex items-center gap-4'>
            <MdFormatColorText /> TEXT
          </button>
        </a>
        <a href="tel:+17202952693" className='flex items-center gap-4'>
          <button className='bg-yellow-400 text-black font-bold text-center px-8 py-3 rounded-lg mt-3 text-[1.3rem] flex items-center gap-4'>
            <MdOutlineCall /> CALL
          </button>
        </a>
        <a href="mailto:contact@stringspro.shop" className='flex items-center gap-4'>
          <button className='bg-yellow-400 text-black font-bold text-center px-8 py-3 rounded-lg mt-3 text-[1.3rem] flex items-center gap-4'>
            <MdOutlineMailOutline /> EMAIL
          </button>
        </a>
      </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default CallNow