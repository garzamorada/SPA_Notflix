import { navbar } from "../js/config.js"
import { barra } from "../js/header.js"
import { movies } from "../js/peliculas.js"
import { signup } from "../js/registro.js"
import { login } from "../js/login.js"
import { logout } from "../js/logout.js"

var tplIndex = `
<h2>Home</h2>
`;
var tplContact = `
<h2>Contacto</h2>
`;

const index = {
    template: `${tplIndex}`,
}
const contact = {
    template: `${tplContact}`,
}


new Vue({
    created() {
        let usuario = localStorage.getItem('usuario');
        if (usuario != null) {
            this.logueado= true;
        } else {
            this.logueado = false;
        }
    },
    el: '#container',
    data: {
        actual: "index",
        items: navbar,
        logueado: false,
    },
    methods: {
        cambiaPagina(val) {
            this.actual = val;
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
    components: {
        index,
        movies,
        contact,
        barra,
        signup,
        login,
        logout,
    }

})

Vue.config.devtools = true;

