import extraerCategoriasFAQ from '../middleware/extraerCategoriasFAQ'
import extraerFAQ from '../middleware/extraerPreguntas'
export const state = () =>({
	datos:[],
	error: null,
	cargando: true,
	preguntas:{
		datos:[],
		error: null,
		cargando: true,
	}
})

export const mutations = {
	cargarCategoriasFAQ(state, contenido, error){
		if (!error) {
			state.datos = contenido
			state.cargando = false
		}else{
			state.error = error
		}
	},
	cargarFAQ(state, contenido, error){
		if (!error) {
			state.preguntas.datos = contenido
			state.preguntas.cargando = false
		}else{
			state.preguntas.error = error
		}
	},
}

export const actions = {
	async getCategoriasFAQ({commit}) {
		var data = {}
		await extraerCategoriasFAQ({idEnc: "3CzpM62xZWsziwYYlxaz7zvEQ7UH2B3BDeasIAQyls4="})
		.then(contenido =>{
			commit('cargarCategoriasFAQ',contenido,null)
			data = contenido
		}).catch(error => {
			commit('cargarCategoriasFAQ',null,error)
		})
		await extraerFAQ({idEnc: data[0].FAQCategoryId})
		.then(contenido2 =>{
			commit('cargarFAQ',contenido2,null)
		}).catch(error => {
			commit('cargarFAQ',null,error)
		})
	},

}
