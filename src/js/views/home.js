import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4"/>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Link className="nav-link active" to="/about" >
          <button className="btn btn-primary btn-custom" href="#" role="button">Learn more</button>
        </Link>
      </p>
    </div>
  </div>
);
