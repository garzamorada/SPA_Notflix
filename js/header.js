import navbar from "./config.js"

var plantilla = `
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="logo">
        <div class="fondo_logo"><i class="fas fa-play-circle"></i>Notflix</div>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" :href="link"><i :class="iclass"></i>{{nombre}}</a>
            </li>
        </ul>
    </div>
</nav>`;

const barra = {
    props: ['link', 'nombre', 'iclass'],
    template: `${plantilla}`,
}

new Vue({
    el: '#contenedorPeliculas',
    mounted() {
        axios.get(this.json)
            .then(respuesta => this.peliculas = respuesta.data)
            .catch(error => console.error(error));
    },
    data: {
        filtercategoria: "",
        json: "../js/peliculas.json",
        peliculas: []
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

        }
    },
    components: {
        movie,
    }

})

Vue.config.devtools = true;