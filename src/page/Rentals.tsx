import React from "react";
import Navbar from "../component/Navbar";
import RentalsBanner from "../component/RentalsBanner";
import RentNow from "../component/RentNow";
import CallNow from "../component/CallNow";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";

function Rentals() {
  return (
    <div>
      <Navbar />
      <RentalsBanner/>
      {/* <RentNow/> */}
      <CallNow/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default Rentals;
