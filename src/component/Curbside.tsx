import { FaCarAlt, FaRegCalendarAlt } from "react-icons/fa";
function Curbside() {
  return (
    <div className="py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-6 px-10">
        <div className="">
          <div className="font-bold text-blue-300 pb-1">ADDRESS</div>
          <div className="pb-1 text-sm">
          539 E 56th Ave
          Denver, CO 80216
          </div>
          <div className="font-bold text-blue-300 pt-1">
            PHONE: +17022952693
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div
            className="font-bold text-blue-300 pb-1"
            style={{ fontSize: "2rem" }}
          >
            <FaCarAlt />
          </div>
          <div className="font-bold text-blue-300 pt-1 text-sm">
            CURBSIDE AVAILABLE
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div
            className="font-bold text-blue-300 pb-1"
            style={{ fontSize: "2rem" }}
          >
            <FaRegCalendarAlt />
          </div>
          <div className="font-bold text-blue-300 pt-1 text-sm">
            SHOP BY APPOINTMENT
          </div>
        </div>
      </div>

      {/* <div className="border-t-2 py-5 ">
        <div className="grid grid-cols-5 px-10">
        <div className="">
            <img src="/image/a.jpg" alt="" />
        </div>
        <div className="">
            <img src="/image/a2.png" alt="" />
        </div>
        <div className="">
            <img src="/image/a3.png" alt="" />
        </div>
        <div className="">
            <img src="/image/a4.png" alt="" />
        </div>
        <div className="">
            <img src="/image/a5.png" alt="" />
        </div>
    
        </div>
      
      </div> */}
    </div>
  );
}

export default Curbside;
