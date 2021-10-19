document.addEventListener('DOMContentLoaded', async function() {

    let html = await axios.get("../components/pelicula.tpl"); // <---- Load HTML file
    let plantilla = html.data;

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

})
Vue.config.devtools = true;