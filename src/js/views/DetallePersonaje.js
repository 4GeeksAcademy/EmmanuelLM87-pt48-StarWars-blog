import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetallePersonaje = () => {
    const params = useParams();
    const {actions, store} = useContext(Context)
    console.log(store.personaje)
    useEffect (() =>{
        actions.obtenerPersonaje(params.personajeId)
    },[])
    return (<>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.personajeId}.jpg`}/>
        <h2>{store.personaje.result?.properties.name}</h2>
        <p>Gender: {store.personaje.result?.properties.gender}</p>
        <p>Birth year: {store.personaje.result?.properties.birth_year}</p>
        <p>Hair color: {store.personaje.result?.properties.hair_color}</p>
        <p>Height: {store.personaje.result?.properties.height}</p>
        <p>Skin color: {store.personaje.result?.properties.skin_color}</p>
    </>)
}