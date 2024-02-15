import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetalleVehiculo = () => {
    const params = useParams;
    const {actions, store} = useContext(Context)
    console.log(params.vehiculoId)
    useEffect (() =>{
        actions.obtenerVehiculo(params.vehiculoId)
    },[])
    return (
        <p>Modelo: {store.vehiculo.result?.properties.model}</p>
    )
}