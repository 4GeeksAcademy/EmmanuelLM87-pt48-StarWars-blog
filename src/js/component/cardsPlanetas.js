import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardsPlanetas = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planeta.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planeta.name}</h5>
                <div>
                    <Link className="btn btn-primary" to={`/vehiculo/${props.planeta?.uid}`}>Saber más!</Link>
                </div>
            </div>
        </div>
    )
}