import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardsVehiculos = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehiculo.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.vehiculo.name}</h5>
                <div>
                    <Link className="btn btn-primary" to={`/vehiculo/${props.vehiculo?.uid}`}>Saber más!</Link>
                </div>
            </div>
        </div>
    )
}  