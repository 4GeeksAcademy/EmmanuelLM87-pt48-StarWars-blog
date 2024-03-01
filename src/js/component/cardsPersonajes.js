import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";

export const CardsPersonajes = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.addInfoPersonaje(props.personaje.uid)
    }, []);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.personaje.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.personaje.name}</h5>
                <div>
                    <span>Gender: {props.personaje.properties?.gender}</span>
                    <br></br>
                    <span>Hair Color: {props.personaje.properties?.hair_color}</span>
                    <br></br>
                    <span>Eye-Color: {props.personaje.properties?.eye_color}</span>
                    <br></br>
                    <Link className="btn btn-primary" to={`/personaje/${props.personaje?.uid}`}>Learn more!</Link>
                    <button className="favorites-planets" onClick={()=>{
                        actions.addFavorites(props.personaje)
                        console.log(store.favorites)
                    }}><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}  
