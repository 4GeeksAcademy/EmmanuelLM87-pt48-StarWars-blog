import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetallePersonaje = () => {
    const params = useParams;
    const {actions, store} = useContext(Context)
    console.log(params.personajeId)
    useEffect (() =>{
        actions.obtenerPersonaje(params.personajeId)
    },[])
    return (
        <p>Género: {store.personaje.result?.properties.gender}</p>
    )
}