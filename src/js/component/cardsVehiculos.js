import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";


export const CardsVehiculos = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.addInfoVehiculo(props.vehiculo.uid)
    }, []);
    console.log(props.vehiculo)
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehiculo.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.vehiculo.name}</h5>
                <div>
                    <span>Cargo capacity: {props.vehiculo.properties?.cargo_capacity}</span>
                    <br></br>
                    <span>Passengers: {props.vehiculo.properties?.passengers}</span>
                    <br></br>
                    <Link className="btn btn-primary" to={`/vehiculo/${props.vehiculo?.uid}`}>Learn more!</Link>
                    <button className="favorites-planets" onClick={() => {
                        actions.addFavorites(props.vehiculo)
                        console.log(store.favorites)
                    }}><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}  