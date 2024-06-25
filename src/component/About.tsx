// AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Content Column */}
          <div className="content-column order-2 lg:w-1/2 w-full px-4">
            <div className="inner-column pl-4">
              <div className="sec-title">
                <span className="title text-red-500 text-lg font-medium">About Company</span>
                <h2 className="text-4xl font-bold pb-4">We are leader in <br /> Industrial market Since 1992</h2>
              </div>
              <div className="text text-gray-600 mt-8">
              Strings Pro Store is your one stop Shop for sales of new and used string instruments. 
We are a top player in the sales and rental of string instruments within and outside Colorado.
We provide excellent customer service and support to ensure a wonderful purchase and renting experience. 
              </div>
              <ul className="list-style-one my-8 space-y-3">
                <li>Sales of New Strings Instruments </li>
                <li>Sales of Used Strings Instruments</li>
                <li>String Instrument Rentals</li>
              </ul>
              <div className="btn-box">
                <a href="/contact-us" className="theme-btn btn-style-one text-white bg-red-500 py-2 px-8 hover:bg-blue-900">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column lg:w-1/2 w-full px-4 flex justify-center">
            <div className="inner-column relative md:pl-20 pb-24">
              <figure className="image-1 relative">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img src="/image/v.jpg" alt="" className="rounded-lg shadow-lg h-[70vh]" />
                </a>
              </figure>
              <figure className="image-2 absolute bottom-0 left-0">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img src="/image/v2.jpg" alt="" className="rounded-lg shadow-lg w-[20rem]"  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
