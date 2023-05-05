import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => (
    <div className="wrapper pt-5 pl-5">
      <div className="container">
      <div className="jumbotron jumbotron-fluid rounded-3 p-4 mt-3 mb-5 text-center" >
          <h1 className="display-4">Things are changing fast. But you can be faster</h1>
          <p className="lead">
          Unlock explosive revenue growth with next - level, evidence based digital marketing.
          </p>
          <hr className="my-4" />
          <p>
          We grow with clients across all industries, and of all sizes. Here's a snapshot of what we're achieving with them. 
          </p>
          <p className="lead">
            <Link className="nav-link active" to="/about">
              <button className="btn btn-primary btn-custom" role="button">
                Learn more
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="row justify-content-center p-5 gap-5">
        <div className="bg-image card shadow-1-strong col-xl-3 col-md- col-lg-3 " style={{ backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')" }}>
          <div className="card-body text-white">
            <img src="https://www.thegotoguy.co/blog/wp-content/uploads/2022/12/SMM-for-small-business-1.png" className="card-img-top" alt="My image" />
            <h4 className="card-title pt-3">Social Media</h4>
            <p className="card-text pt-2">
            Our team stays up-to-date with the latest practices, so you can be sure that your social media presence is always fresh and effective. Contact us today to learn more about how we can help you achieve your marketing goals.
            </p>
            <Link className="nav-link active" to="/services">
              <button className="btn btn-outline-light" role="button">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-image card shadow-1-strong col-xl-3 col-md-4 col-lg-3" style={{backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')"}}>
          <div className="card-body text-white ">
          <img src="https://cdn.logojoy.com/wp-content/uploads/20190606100723/cosmic_coffee_scene-1024x576.jpg" className="card-img-top" alt="My image" />
            <h4 className="card-title pt-3">Branding Identity</h4>
            <p className="card-text pt-2">
            Don't settle for a generic brand identity - let us help you create a brand that truly represents your business. Contact us today to learn more about our branding identity services and how we can help take your business to the next level.
            </p>
            <Link className="nav-link active" to="/services">
              <button className="btn btn-outline-light" role="button">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-image card shadow-1-strong col-xl-3 col-md-4 col-lg-3" style={{ backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')" }}>
          <div className="card-body text-white">
          <img src="https://i.pinimg.com/originals/b7/45/b8/b745b8eba73f8bbb58d36e8077b6009e.png" className="card-img-top" alt="My image" />
            <h4 className="card-title pt-3">Web Design</h4>
            <p className="card-text pt-2">
            Our team stays up-to-date with the latest web design trends and best practices. Contact us today to learn more about our web design services and how we can help you achieve your marketing goals.
            </p>
            <Link className="nav-link active" to="/services">
              <button className="btn btn-outline-light" role="button">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
);
