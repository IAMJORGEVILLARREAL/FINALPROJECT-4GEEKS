import React from "react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="container">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly.
          Our team will come back to you within a matter of hours to help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    <label for="name" className="form-label">
                      
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      placeholder="Your Email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      placeholder="Message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message"></label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {
                    document.getElementById("contact-form").submit();
                  }}
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </form>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Homestead, FL 33030, USA</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>(305) 747-9412</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
