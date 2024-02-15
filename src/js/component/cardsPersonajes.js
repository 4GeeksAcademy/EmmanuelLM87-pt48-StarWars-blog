import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardsPersonajes = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.personaje.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.personaje.name}</h5>
                <div>
                    <Link className="btn btn-primary" to={`/personaje/${props.personaje?.uid}`}>Saber más!</Link>
                </div>
            </div>
        </div>
    )
}  
