    document.addEventListener('DOMContentLoaded', async function() {


        let json = await axios('../js/peliculas.json');
        let peliculas = json.data;
        let html = await axios.get("../components/pelicula.tpl.html"); // <---- Load HTML file
        plantilla = html.data;
        //let elemento = document.getElementById('contenedor');
        //elemento.innerHTML = html.data;


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
        console.log(movie);

        new Vue({
            el: '#contenedor',
            data: {
                filtercategoria: "todas",
                peliculas
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