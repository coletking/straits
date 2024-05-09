import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          <div>
            <h4 className="text-lg text-green-100  font-semibold mb-4">
              COMPANY
            </h4>
            <ul>
              <li className="py-1 hover:underline">About Us</li>
              <li className="py-1 hover:underline">Shipping</li>
              <li className="py-1 hover:underline">Service & Repairs</li>
              <li className="py-1 hover:underline">Financing</li>
              <li className="py-1 hover:underline">Contact Email</li>
              <li className="py-1 hover:underline">Returns</li>
              <li className="py-1 hover:underline">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-green-100 font-semibold mb-4">
              SHOP CATEGORIES
            </h4>
            <ul>
              <li className="py-1 hover:underline">Lifestyle</li>
              <li className="py-1 hover:underline">Guitars</li>
              <li className="py-1 hover:underline">Bass Guitars</li>
              <li className="py-1 hover:underline">Folk Instruments</li>
              <li className="py-1 hover:underline">Keyboards and MIDI</li>
              <li className="py-1 hover:underline">Drums and Percussion</li>
              <li className="py-1 hover:underline">Amps</li>
              <li className="py-1 hover:underline">Effects</li>
              <li className="py-1 hover:underline">Pro-Audio</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-green-100  font-semibold mb-4">
              BAND AND ORCHESTRA
            </h4>
            <ul>
              <li className="py-1 hover:underline">Band Rentals</li>
              <li className="py-1 hover:underline">Orchestra Rentals</li>
              <li className="py-1 hover:underline">Update Card</li>
              <li className="py-1 hover:underline">Make A One-Time Payment</li>
              <li className="py-1 hover:underline">Account Info</li>
              <li className="py-1 hover:underline">Shop Band</li>
              <li className="py-1 hover:underline">Shop Orchestra</li>
              <li className="py-1 hover:underline">Shop Print Music Methods</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-green-100  font-semibold mb-4">
              PIANOS
            </h4>
            <ul>
              <li className="py-1 hover:underline">Acoustic Grands</li>
              <li className="py-1 hover:underline">Acoustic Uprights</li>
              <li className="py-1 hover:underline">Player Pianos</li>
              <li className="py-1 hover:underline">Hybrid Pianos</li>
              <li className="py-1 hover:underline">USED Pianos</li>
              <li className="py-1 hover:underline">Clavinovas</li>
              <li className="py-1 hover:underline">Piano Services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-20 gap-8">
        <div className="flex justify-center items-center flex-col">
          <div className="">PAYMENT METHODS</div>
          <div className="">
            <img src="/image/p.png" alt="" style={{width:"200px"}}/>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="">VERIFIED MERCHANT</div>
          <div className="">
            <img src="/image/p2.png" alt="" />
          </div>
          <div className="text-xs text-center m-auto">StraitMusic.com is registered with the Authorize.Net Verified Merchant Seal program.</div>
        </div>


        <div className="flex justify-center items-center flex-col">
          <div className="">PROTECTED BY reCAPTCHA</div>
          <div className="">
            <img src="/image/p3.png" alt="" />
          </div>
          <div className="text-xs text-center m-auto">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
