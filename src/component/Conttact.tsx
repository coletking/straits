import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/contact.css'

function Conttact() {
  return (
    <div>
        <Navbar/>
      <section className="contact-page-sec bg-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-center item-center">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span>1215 Lorem Ipsum, Ch 176080 </span>
                    <span>Chandigarh , INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>info@LoremIpsum.com</span>
                    <span>yourmail@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>office time</h2>
                    <span>Mon - Thu 9:00 am - 4.00 pm</span>
                    <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between item-center">
            <div className="col-md-8 w-full">
              <div className="contact-page-form">
                <h2 className="text-white pl-3">Get in Touch</h2>
                <form action="contact-mail.php">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          
            <div className="md:w-1/3 w-full "> {/* Tailwind class to set column width */}
      <div className="contact-page-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
          width="100%" // set width to 100% of the parent element
          height="450" // height of the iframe
          frameBorder="0" // no border
          style={{ border: 0 }} // inline styling to set border to 0
          allowFullScreen // allow fullscreen mode
          aria-label="Google Maps location of Chandigarh" 
          title="enter address"// add accessibility
        />
      </div>
    

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Conttact;
