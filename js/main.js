/**********************************************/
/*           COSNTRUCTOR PRINCIPAL            */
/**********************************************/

/* importo los componentes y la data */
import { MisMetodos } from "./plugins/misMetodos.js"
import { navbar } from "./data/config.js"
import { barra } from "./components/header.js"
import { movies } from "./components/peliculas.js"
import { signup } from "./components/registro.js"
import { login } from "./components/login.js"
import { logout } from "./components/logout.js"
import { options } from "./components/options.js"
import { contact } from "./components/contact.js"
import { player } from "./components/player.js"
import { index } from "./components/home.js"


Vue.use(MisMetodos);
/* carga los modulos, importa las configuraciones y maneja la pagina actual */
new Vue({
    created() {
        /* importo los datos de localstorage y sessionStorage */
        if (sessionStorage.getItem('actual') != null) {
            this.actual = sessionStorage.getItem('actual');
        }
        let usuario = localStorage.getItem('usuario');
        if (usuario != null) {
            this.logueado = true;
        } else {
            this.logueado = false;
        }

        /* leo los datos de la url */
        var post = window.location.search;
        var parametros = new URLSearchParams(post);

        this.youtube = parametros.get('youtube');
        this.tituloMovie = parametros.get('titulo');
        if (parametros.get('pagina') != null & parametros.get('pagina') != '') {
            this.actual = parametros.get('pagina');
        }

    },
    el: '#container',
    data: {
        actual: "index",
        items: navbar,
        logueado: false,
        youtube: "",
        tituloMovie: "",
    },
    methods: {
        cambiaPaginaActual(val) {
            this.actual = val;
        },
        /* pinta de la pagina actual en el menu */
        seleccionado(link) {
            if (this.actual == link) {
                return 'activa';
            } else {
                return 'inactiva';
            }
        },
    },
    computed: {
        paginaActual() {
            return `${this.actual}`;
        },
        /* filtra las paginas del menu para logueado y no logueado */
        filtroItems() {
            if (this.logueado) {
                return this.items.filter(item => {
                    return (item.requiereLogin == true || item.requiereLogin == null)
                });
            } else {
                return this.items.filter(item => {
                    return (item.requiereLogin == false || item.requiereLogin == null)
                });
            }
        },
    },
    watch: {
        /* si cambia el valor de pagina actual lo almacena */
        actual(nuevo, viejo) {
            sessionStorage.setItem('actual', nuevo);
        }
    },
    components: {
        index,
        movies,
        contact,
        barra,
        signup,
        login,
        logout,
        options,
        player,
    }

})

Vue.config.devtools = true;