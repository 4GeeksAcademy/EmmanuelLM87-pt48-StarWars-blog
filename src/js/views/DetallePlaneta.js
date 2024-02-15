import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetallePlaneta = () => {
    const params = useParams;
    const {actions, store} = useContext(Context)
    console.log(params.planetaId)
    useEffect (() =>{
        actions.obtenerPlaneta(params.planetaId)
    },[])
    return (
        <p>Clima: {store.planeta.result?.properties.climate}</p>
    )
}