import React, { useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetalleVehiculo = () => {
    const params = useParams();
    const {actions, store} = useContext(Context)
    console.log(params.vehiculoId)
    useEffect (() =>{
        actions.obtenerVehiculo(params.vehiculoId)
    },[])
    return (<>
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehiculoId}.jpg`}/>
        <h2>{store.vehiculo.result?.properties.name}</h2>
        <p>Model: {store.vehiculo.result?.properties.model}</p>
        <p>Cargo capacity: {store.vehiculo.result?.properties.cargo_capacity}</p>
        <p>Manufacturer: {store.vehiculo.result?.properties.manufacturer}</p>
        <p>Passengers: {store.vehiculo.result?.properties.passengers}</p>
        <p>Lenght: {store.vehiculo.result?.properties.length}</p>
    </>)
}