/**********************************************/
/*               LISTA DE PELICULAS           */
/**********************************************/

const tplMovie = `
<figure class="col-6 col-sm-4 col-md-3 col-xl-2 peliculas" >
    <a :href="urlhref">
        <img :src="urlimg">
    </a>
    <figcaption>
        {{titulo}}
    </figcaption>
</figure>`;

/** genera las figure de las peliculas */
const movie = {
    template: `${tplMovie}`,
    props: ['youtube', 'titulo', 'imagen', 'categoria'],
    computed: {
        urlhref() {
            return 'index.html?pagina=player&youtube=' + this.youtube + '&titulo=' + this.titulo;
        },
        urlimg() {
            return '../assets/peliculas/' + this.imagen;
        }
    }
}


const tplMovies = `
<div id="contenedorPeliculas">
    <div class="filtro">
        <select v-model="filtercategoria">
            <option value="" selected disabled>Filtrar Películas</option>
            <option value="todas">Todas</option>
            <option value="marvel">Marvel</option>
            <option value="dc">DC</option>
        </select>
    </div>
    <section class="row g-3">
        <movie v-for="pelicula in filtroCategoria" :titulo="pelicula.titulo" :youtube="pelicula.youtube" :imagen="pelicula.imagen" :categoria="pelicula.categoria"></movie>
    </section>
</div>`;

/** importa peliculas.json y maneja el filtro por categoria */
export const movies = {
    mounted() {
        axios.get(this.json)
            .then(respuesta => this.peliculas = respuesta.data)
            .catch(error => console.error(error));
    },
    template: `${tplMovies}`,
    data: function() {
        return {
            filtercategoria: "",
            json: "../js/data/peliculas.json",
            peliculas: [],
        }
    },
    computed: {
        filtroCategoria() {
            if (this.filtercategoria != null && this.filtercategoria != '' && this.filtercategoria != 'todas') {
                return this.peliculas.filter(pelicula => {
                    return pelicula.categoria === this.filtercategoria;
                })
            } else {
                return this.peliculas;
            }
        },
    },
    components: {
        movie
    }
}