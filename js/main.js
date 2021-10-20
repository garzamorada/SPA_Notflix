import {navbar} from "../js/config.js"
import {barra} from "../js/header.js"

var logued = true;
var current = "Home";

var plantilla1 = `
<h2>Pagina 1</h2>
`;
var plantilla2 = `
<h2>Pagina 2</h2>
`;
var plantilla3 = `
<h2>Pagina 3</h2>
`;

const Home = {
    template: `${plantilla1}`,
}
const Peliculas = {
    template: `${plantilla2}`,
}
const Contacto = {
    template: `${plantilla3}`,
}


new Vue({
    el: '#container',
    data: {
        actual: "Home",
        items: navbar,
        actual: current,
        logueado: logued,
    },
    computed: {
        paginaActual() {
            return `${this.actual}`;
        },
        filtroItems() {
            if (this.logueado) {
                return this.items.filter(item => {
                return (item.nombre != this.actual && (item.requiereLogin == true || item.requiereLogin == null))
            });
            } else {
                return this.items.filter(item => {
                return (item.nombre != this.actual &&  (item.requiereLogin == false || item.requiereLogin == null))
            });
            }
        }
    },
    components: {
        Home, Peliculas, Contacto, barra,
    }

})

Vue.config.devtools = true;