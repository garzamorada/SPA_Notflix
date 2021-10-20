var plantilla = `
<figure class="col-6 col-sm-4 col-md-3 col-xl-2 peliculas" >
    <a :href="urlhref">
        <img :src="urlimg">
    </a>
    <figcaption>
        {{titulo}}
    </figcaption>
</figure>`;

const movie = {
    props: ['youtube', 'titulo', 'imagen', 'categoria'],
    template: `${plantilla}`,
    computed: {
        urlhref() {
            return '../pages/player.html?youtube=' + this.youtube + '&titulo=' + this.titulo;
        },
        urlimg() {
            return '../assets/peliculas/' + this.imagen;
        }
    }
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