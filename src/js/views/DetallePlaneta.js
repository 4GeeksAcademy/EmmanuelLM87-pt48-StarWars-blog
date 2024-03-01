import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetallePlaneta = () => {
    const params = useParams();
    const {actions, store} = useContext(Context)
    console.log(params.planetaId)
    useEffect (() =>{
        actions.obtenerPlaneta(params.planetaId)
    },[])
    return (<>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetaId}.jpg`}/>
        <h2>{store.planeta.result?.properties.name}</h2>
        <p>Climate: {store.planeta.result?.properties.climate}</p>
        <p>Population: {store.planeta.result?.properties.population}</p>
        <p>Orbital period: {store.planeta.result?.properties.orbital_period}</p>
        <p>Rotation Period: {store.planeta.result?.properties.rotation_period}</p>
        <p>Diameter: {store.planeta.result?.properties.diameter}</p>
    </>)
}