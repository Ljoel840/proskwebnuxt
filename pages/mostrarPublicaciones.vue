<template>
	<section>
		<div class="fondoTitulo">
			<h1>Publicaciones</h1>
		</div>
			<div class="busqueda">
				<buscar @opcion="seleccion($event)"/>
			</div>
		<div class="contenedorPrincipal">
			<img src="@/assets/img/separador2.png" alt="separador" class="separador">
			
			<publicaciones :datos="datosPublicaciones.datos" v-if="!datosPublicaciones.cargando"/>

		</div>

	</section>
</template>
<script>
export default {
	name: 'mostrarPublicaciones',
	components: {
		publicaciones: () => import('@/components/publicaciones'),
		buscar: () => import('@/components/buscar'),
	},
	data() {
		return {
			ultimo: 12,
			imagenDefault: require('@/assets/img/usuario.png')
		}
	},
	computed: {
		datosPublicaciones () {
			return this.$store.state.publicaciones
		},
	},
	methods: {
		agregarDatos(){
			this.ultimo=this.ultimo+12
		},
		ir(pag,data){
			var nameProsker = ''
			if (pag=='prosker-nameProsker'){
				nameProsker = this.quitarEspacios(data.nombre)
			}
			this.$router.push({
				name: pag, 
				params: {data,nameProsker}
			}) 
		},
		seleccion(opc){
			if (opc.tipo==='Categorias') {
				this.ir("mostrarCategorias",opc.datos)
			}else{
				this.ir("prosker-nameProsker",opc.datos)

			}
		},
		quitarEspacios(nombre){
			return nombre.replace(/ /g, "-").toLowerCase()
		},
	},
}
</script>
<style scoped>
	section{
		width: 100%;
	}
	h1{
		font-size: 3em;
		color: var(--d-color);
		font-weight: 800;
		margin-top: 1.5em;
	}
	h2{
		margin-top: 1.5em;
		font-size: 2em;
	}
	h3{
		margin-top: .5em;
		font-size: 1.5em;
		color: var(--d-color);
		font-weight: 800;
	}
	.fondoTitulo{
		width: 100%;
		height: 200px;
		position: absolute;
		top: 0;
		z-index: -1;
		background-color: var(--a-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.separador{
		margin-top: -20px;
		width: 100%;
		height: auto;
		background-color: transparent;
		border: none;
	}
	.contenedorPrincipal{
		width: 100%;
		background-color: var(--e-color);
		margin-top: -1px;
	}

	.subtitulo{
		width: 90%;
		margin: auto;
	}
	.contenedor {
		width: 100%;
		padding: 2em;
		display: flex;
		justify-content: center;		
		flex-wrap: wrap;
	}

	.busqueda {
		width: 100%;
		min-height: 50px;
		margin: 100px 0 0 0;
		background-color: var(--a-color);
	}


	.contenedorUsuario{
		width: 350px;
		height: auto;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}


	.imagen{
		min-width: 150px;
		height: 150px;
		background-color: #fff;
		background-image: url('@/assets/img/usuario.png');
		background-position: center;
		background-size: 200px auto;
		background-repeat: no-repeat;
		border-radius: 100px;
		border: 2px solid var(--b-color);
	}
	
	.categorias{
		max-height: 60px;
		overflow-y: hidden;
	}
	.texto{
		width: 200px ;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 20px;
	}
	.texto h1{
		margin: 0 10px;
		color:  var(--c-color);
		font-size: 1.3em;
	}
	.texto h4{
		margin: 0 10px;
		color:  var(--b-color);
		font-size: 1em;
	}
	.gris{
		color:  var(--c-color) !important;
	}
	.verMas{
		width: 100%;
		height: auto;
		padding-bottom: 2em;
		background-color: var(--d-color);
		border: none;
		cursor: pointer;
		outline: none;
		
	}
	.verMas img{
		width: 80px;
		height: auto;
	}
	.verMas:hover img{
		filter: grayscale(80%);
	}
	@media (max-width: 1000px) {
		.fondoTitulo{
			height: 230px;
		}
		.contenedorPrincipal{
			margin-top: 30px;
		}
		h1{
			margin: 0;
		}
		.separador{
			margin-top: -5px;
		}
		.busqueda {
			min-height: 50px;
			margin: 150px 0 0 0;
		}
		.busqueda *{
			margin-left: 15% ;
		}
	}

	@media (max-width: 500px) {
		.busqueda *{
			margin-left: 5% ;
		}
	}


</style>