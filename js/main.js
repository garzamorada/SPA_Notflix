import { navbar } from "../js/config.js"
import { barra } from "../js/header.js"
import { movies } from "../js/peliculas.js"
import { signup } from "../js/registro.js"
import { login } from "../js/login.js"
import { logout } from "../js/logout.js"
import { options } from "../js/options.js"
import { contact } from "../js/contact.js"
import { player } from "../js/player.js"
import { index } from "../js/home.js"

new Vue({
    created() {
        if (localStorage.getItem('actual') != null) {
            this.actual = localStorage.getItem('actual');
        }
        let usuario = localStorage.getItem('usuario');
        if (usuario != null) {
            this.logueado = true;
        } else {
            this.logueado = false;
        }
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
            console.log(val)
        },
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
        actual(nuevo, viejo) {
            localStorage.setItem('actual', nuevo);
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