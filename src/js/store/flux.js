const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			vehiculos: [],
			planetas: [],
			personaje: [],
			vehiculo: [],
			planeta: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			obtenerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => response.json())
					.then((result) => { setStore({ personajes:result.results}) })
					.catch((error) => console.error(error));
			},

			obtenerVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then((response) => response.json())
				.then((result) => { setStore({ vehiculos:result.results}) })
				.catch((error) => console.error(error));
			},
			
			obtenerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then((response) => response.json())
				.then((result) => { setStore({ planetas:result.results}) })
				.catch((error) => console.error(error));
			},
			obtenerPersonaje: (id) => {
				console.log(id)
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then((response) => response.json())
					.then((result) => { setStore({ personaje: result}) })
					.catch((error) => console.error(error));
			},
			obtenerVehiculo: (id) => {
				console.log(id)
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then((response) => response.json())
					.then((result) => { setStore({ vehiculo: result}) })
					.catch((error) => console.error(error));
			},
			obtenerPlaneta: (id) => {
				console.log(id)
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then((response) => response.json())
					.then((result) => { setStore({ planeta: result}) })
					.catch((error) => console.error(error));
			},
			addInfoPersonaje: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response) => response.json())
					.then((result) => { 
						let newPersonaje = getStore().personajes.map(personaje => {
							if (personaje.uid === uid){
								return Object.assign(personaje, result.result)
							}
							else return personaje
						})
						setStore({personajes: newPersonaje})
					 })
					.catch((error) => console.error(error));
			},
			addInfoVehiculo: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then((response) => response.json())
					.then((result) => { 
						let newVehiculo = getStore().vehiculos.map(vehiculo => {
							if (vehiculo.uid === uid){
								return Object.assign(vehiculo, result.result)
							}
							else return vehiculo
						})
						setStore({vehiculos: newVehiculo})
					 })
					.catch((error) => console.error(error));
			},
			addInfoPlaneta: (uid) => {
				fetch(`"https://www.swapi.tech/api/planets/${uid}`)
					.then((response) => response.json())
					.then((result) => { 
						let newPlaneta = getStore().planetas.map(planeta => {
							if (planeta.uid === uid){
								return Object.assign(planeta, result.result)
							}
							else return planeta
						})
						setStore({planetas: newPlaneta})
					 })
					.catch((error) => console.error(error));
			},

			addFavorites: (element) => {
				let store = getStore ();
				if (!store.favorites.includes(element)) {
					setStore ({favorites: [...store.favorites, element]})
				}
			},

			deleteFavorites: (element) => {
				let store = getStore ();
				const filtrado = store.favorites.filter((e)=>{
					return e != element
				})
				setStore({favorites:filtrado})
			}
		}
	};
};

export default getState;
