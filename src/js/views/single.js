import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron rounded-3 p-4 mt-3 mb-5 " style={{ backgroundImage: "url('https://preview.redd.it/my-spiritual-a-i-artwork-v0-8938rrpj240a1.png?width=640&crop=smart&auto=webp&s=19a0d70f3cba1923500b19547d704ac2a5e5f8bf')", backgroundSize: 'cover', backgroundPosition: 'center', color:"white" }}>
			<h1 className="display-4">Services: {store.demo[params.theid].title}</h1>
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
			<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
			</Link>
          </p>
        </div>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
