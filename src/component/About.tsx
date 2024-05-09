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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <ul className="list-style-one my-8 space-y-3">
                <li>Lorem Ipsum is simply dummy tex</li>
                <li>Consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
              </ul>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-one text-white bg-red-500 py-2 px-8 hover:bg-blue-900">Contact Us</a>
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
