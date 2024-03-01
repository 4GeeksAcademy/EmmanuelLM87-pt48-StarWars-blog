import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";

export const CardsPlanetas = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.addInfoPlaneta(props.planeta.uid)
    }, []);
    console.log(props.planeta)
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planeta.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planeta.name}</h5>
                <div>
                    <span>Population: {props.planeta.properties?.population}</span>
                    <br></br>
                    <span>Terrain: {props.planeta.properties?.terrain}</span>
                    <br></br>
                    <Link className="btn btn-primary" to={`/planeta/${props.planeta?.uid}`}>Learn more!</Link>
                    <button className="favorites-planets" onClick={()=>{
                        actions.addFavorites(props.planeta)
                        console.log(store.favorites)
                    }}><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}