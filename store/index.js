import extraerBlog from '../middleware/extraerBlog'

export const state = () => ({
	// ancho: window.innerWidth,
	// 	scrollY: window.scrollY,
	proskersDestacados:[],
	nuevoMensaje: 0,
	conteoAnteriorMensaje:0,
	ahora: null,
	chatAbierto: {},
	marcadores:[],
	seo:{
		datos:[],
		error: null,
		cargando: true
	},
	miPosicion:{
		posicion: {},
		error: null,
		titulo: 'YO',
		obtenerPosicion: true
	},
})


export const mutations = {
	setearHora (state) {
		state.ahora = new Date()
	},
	cargarSeo(state, contenido, error){
		if (!error) {
			state.seo.datos = contenido
			state.seo.cargando = false
		}else{
			state.seo.error = error
		}
	},
	cargarPosicion(state,contenido,error){
		if (error) {
			state.miposicion.error = error
		}else{
			state.miPosicion.obtenerPosicion = false;
			state.miPosicion.posicion = contenido;
		}

	},
}

export const actions = {
	async nuxtServerInit({ commit }) {
		commit('setearHora')
		await extraerBlog({idEnc: ""})
		.then(contenido =>{
		   commit('cargarSeo',contenido,null)
		}).catch(error => {
		  commit('cargarSeo',null,error)
		})
 	},
	//  async getPosition({ commit }){
	// 	let mensajeError = null
	// 	if(!("geolocation" in navigator)) {
	// 		mensajeError = 'Geolocalización no disponible';
	// 		commit('cargarPosicion',null,mensajeError)
	// 	}else{
	// 		await navigator.geolocation.getCurrentPosition(pos => {
	// 			commit('cargarPosicion',pos,null)
	// 		}, err => {
	// 			mensajeError = err.message
	// 			commit('cargarPosicion',null,mensajeError)
	// 		})
	// 	}
	//  }





}
