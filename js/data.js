document.addEventListener('DOMContentLoaded', async function() {


    let json = await axios('../js/peliculas.json');
    let peliculas = json.data;
    let html = await axios.get("../components/pelicula.tpl"); // <---- Load HTML file
    let elemento = document.getElementById('contenedor');
    elemento.innerHTML = html.data;

    var contenedor = new Vue({
        el: '#contenedor',
        data: {
            peliculas
        },
        methods: {
            urlimg(imagen) {
                let url = "../assets/peliculas/" + imagen;
                return url;
            },
            urlhref(youtube, titulo) {
                let url = "../pages/player.html?youtube=" + youtube + "&titulo=" + titulo;
                return url;
            }
        }

    })
})