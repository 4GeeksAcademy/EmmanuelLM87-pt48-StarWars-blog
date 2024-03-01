import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logoSW from "../../img/starwarslogo.png"
import { Context } from "../store/appContext";
import { element } from "prop-types";

export const Navbar = () => {
	const {store , actions} = useContext (Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="mx-3" src={logoSW} width="100" /></span>
			</Link>
			<div class="dropdown">
				<a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</a>

				<ul class="dropdown-menu">
					{
						store.favorites.length == 0? <li>Empty</li>:
						store.favorites.map((e, index)=>{
							return (
							<li key={index}>
								<div><a>{e.name}</a></div>
								<div><i className="fas fa-trash-alt" onClick={()=>{
									actions.deleteFavorites(e)
								}}></i></div>
							</li>

							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};
