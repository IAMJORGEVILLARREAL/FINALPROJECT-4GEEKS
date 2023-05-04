import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => (
    <div className="wrapper pt-5 pl-5">
      <div className="container">
        <div className="jumbotron rounded-3 p-4 mt-3 mb-3" style={{ backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')", backgroundSize: 'cover', backgroundPosition: 'center', color:"white" }}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
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
        <div className="bg-image card shadow-1-strong col-xl-3 col-md-4 col-lg-3 " style={{ backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')" }}>
          <div className="card-body text-white">
            <img src="https://www.thegotoguy.co/blog/wp-content/uploads/2022/12/SMM-for-small-business-1.png" className="card-img-top" alt="My image" />
            <h4 className="card-title pt-3">Social Media</h4>
            <p className="card-text pt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. 
            </p>
            <a href="#!" className="btn btn-outline-light">
              Button
            </a>
          </div>
        </div>

        <div className="bg-image card shadow-1-strong col-xl-3 col-md-4 col-lg-3" style={{backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')"}}>
          <div className="card-body text-white ">
          <img src="https://cdn.logojoy.com/wp-content/uploads/20190606100723/cosmic_coffee_scene-1024x576.jpg" className="card-img-top" alt="My image" />
            <h4 className="card-title pt-3">Branding Identity</h4>
            <p className="card-text pt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" className="btn btn-outline-light">
              Button
            </a>
          </div>
        </div>

        <div className="bg-image card shadow-1-strong col-xl-3 col-md-4 col-lg-3" style={{ backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')" }}>
          <div className="card-body text-white">
          <img src="https://i.pinimg.com/originals/b7/45/b8/b745b8eba73f8bbb58d36e8077b6009e.png" className="card-img-top" alt="My image" />
            <h4 className="card-title pt-3">Web Design</h4>
            <p className="card-text pt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" className="btn btn-outline-light">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
);
