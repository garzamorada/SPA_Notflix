/*import {navbar} from "../js/config.js"*/

var plantilla = `
            <li class="nav-item" v-on:click="actual = nombre">
                <a class="nav-link" href="#"><i :class="iclass"></i>{{nombre}}</a>
            </li>`;

export const barra = {
    props: ['link', 'nombre', 'iclass'],
    template: `${plantilla}`,
}

/*new Vue({
    el: '#container',
    data: {
       items: navbar,
       actual: current,
       logueado: logued,
    },
    computed: {
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
        barra,
    }

})*/
