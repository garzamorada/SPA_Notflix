/**********************************************/
/*           COSNTRUCTOR DEl HOME             */
/**********************************************/

const tplIndex = `
<div class="home">
    <div class="home">
        <div class="titulo">Cartelera de Películas</div>
        <p class="textoTodo">
            {{muestraTodo}}
        </p>
        <p class="textoParte">
        {{muestraParte}}
        </p><span :class="muestraMas"><a href="#" v-on:click="mostrarMas()">(mostrar {{mostrar}})</a></span>
    </div>
    <div class="content_botones">
        <div class="botones"><a :class="clase" v-on:mouseover="cambiaClase('boton')" v-on:mouseout="cambiaClase('boton gradiente')" href="#"  v-on:click="cambiaPagina('signup')">Registrarse</a></div>
        <div class="botones"><a class="boton" href="#" v-on:click="cambiaPagina('login')">Ingresar</a></div>
    </div>

    <div class ="row g-3 logos">
        <div class="col-sm-6 col-md-4"><img src="/assets/images/marvel.png"></div>
        <div class="col-sm-6 col-md-4"><img src="/assets/images/dc.png"></div>
        <div class="col-sm-6 col-md-4"><img src="/assets/images/star-wars.png"></div>
        <div class="col-sm-6 col-md-4"><img src="/assets/images/star-trek.png"></div>
        <div class="col-sm-6 col-md-4"><img src="/assets/images/warner.png"></div>
        <div class="col-sm-6 col-md-4"><img src="/assets/images/fox.png"></div>
    </div>
</div>
`
export const index = {
    template: `${tplIndex}`,
    data: function() {
        return {
            clase: "boton gradiente",
            mostrar: "+",
            largo: 256,
            puntos: ' (...)',
            texto: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur ab fuga temporibus quidem a odit! Aperiam eum iure quaerat, accusamus nam, placeat itaque facilis voluptates magni porro nulla reprehenderit. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Recusandae assumenda neque facere natus, delectus quasi explicabo rerum earum ullam ab sapiente dolor a temporibus provident!Deleniti aliquid nihil quia hic. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur ab fuga temporibus quidem a odit! Aperiam eum iure quaerat, accusamus nam, placeat itaque facilis voluptates magni porro nulla reprehenderit.`,
        }
    },
    methods: {
        /* links de los botones de login y signup */
        cambiaPagina(pagina) {
            this.$root.actual = pagina;
        },
        cambiaClase(clase) {
            this.clase = clase;
        },
        /* cambia la cantidad de texto a mostrar en modo movile */
        mostrarMas() {
            if (this.mostrar == '+') {
                this.mostrar = '-';
                this.largo = this.texto.length;
                this.puntos = '';
            } else {
                this.mostrar = '+';
                this.largo = 256;
                this.puntos = ' (...)';
            }
        },
    },
    computed: {
        /* muestra el texto en modo desktop */
        muestraTodo() {
            return this.texto;
        },
        /* acorta el texto en modo movile */
        muestraParte() {
            return this.texto.substr(0, this.largo) + this.puntos;
        },
        /* oculta el link de mostrar + si el texto es corto */
        muestraMas() {
            if (this.texto.length > 256) {
                return 'mostar';
            } else {
                return 'ocultar';
            }
        }
    },
}