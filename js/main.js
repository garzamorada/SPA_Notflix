import { navbar } from "../js/config.js"
import { barra } from "../js/header.js"
import { movies } from "../js/peliculas.js"
import { signup } from "../js/registro.js"

var logued = false;

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
    el: '#container',
    data: {
        actual: "index",
        items: navbar,
        logueado: logued,
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
    }

})

Vue.config.devtools = true;

