import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron-fluid rounded-3 p-4 mt-3 mb-5 text-center" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/04/42/06/34/360_F_442063430_OjLo5sHK0twuUk2hCGWpjLphEHiLcamL.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color:"white" }}>

      <h1 className="display-4">Services: {store.demo[params.theid].title}</h1>
      <p className="lead">
        We are a creative digital agency specializing in online strategy
      </p>
      <hr className="my-4" />
      <p><h2>
        We Believe the Game has Changed
      </h2></p>
      <p>
        That the playing field has been leveled. We believe that small brands and entrepreneurs can compete with giants. Let us show you why. REALM32 has earned a reputation as an innovative digital agency with a mobile-first philosophy, online strategy, breakout creative and engaging digital campaigns that attract customers and enhance experiences are our special blend of rocket fuel. 
      </p>
      
      <div className="d-flex justify-content-center">
        <Link to="/contact">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            SPEAK WITH OUR EXPERTS ➤
          </span>
        </Link>
      </div>

    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object
};
