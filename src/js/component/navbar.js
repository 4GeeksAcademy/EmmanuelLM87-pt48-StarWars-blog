import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="mx-3" src="starwarslogo.png" width="100" /></span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary mx-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">favorito1</a></li>
						<li><a className="dropdown-item" href="#">favorito2</a></li>
						<li><a className="dropdown-item" href="#">favorito3</a></li>
					</ul>
				</div>
				{/*<Link to="/demo">
					<button className="btn btn-primary mx-3">Check the Context in action</button>
				</Link>*/}
			</div>
		</nav>
	);
};
