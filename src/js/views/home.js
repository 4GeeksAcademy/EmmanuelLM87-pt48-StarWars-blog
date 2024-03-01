import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardsPersonajes } from "../component/cardsPersonajes";
import { CardsVehiculos } from "../component/cardsVehiculos";
import { CardsPlanetas } from "../component/cardsPlanetas";

export const Home = () => {

	const { store, actions } = useContext(Context);


	return (
		<div className="contenedor-app">
			<p>Characters</p>
			<div className="contenedor-personajes scrollflow">
				{
					store.personajes.map((personaje, index) => {
						return (
							<div key={index}>
								<CardsPersonajes personaje = {personaje} />
							</div>
						)
					})
				}
			</div>
			<p>Vehicles</p>
			<div className="contenedor-vehiculos scrollflow">
				{
					store.vehiculos.map((vehiculo, index) => {
						return (
							<div key={index}>
								<CardsVehiculos vehiculo = {vehiculo} />
							</div>
						)
					})
				}
			</div>
			<p>Planets</p>
			<div className="contenedor-planetas scrollflow">
				{
					store.planetas.map((planeta, index) => {
						return (
							<div key={index}>
								<CardsPlanetas planeta = {planeta} />
							</div>
						)
					})
				}
			</div>
		</div>
	)
};
