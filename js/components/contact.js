import { camposContacto } from "../data/config.js"
/**********************************************/
/*          FORMULARIO DE CONTACTO            */
/**********************************************/

const tplContact = `
    <form class="row g-3 options" action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="validateFormContact($event)">
        <div class="col-12 titulo">
            Contactanos con tus preguntas
        </div>
        <template v-for="campoContacto in camposContacto">
            <template v-if="campoContacto.tipo == 'text' || campoContacto.tipo == 'tel' || campoContacto.tipo == 'email' || campoContacto.tipo == 'password'">
                <div class="col-sm-6 col-xl-3 label"><label>{{campoContacto.label}}</label></div>
                <div class="col-sm-6 col-xl-3 input">
                    <input 
                    :class="campoContacto.claseCampo" 
                    :name="campoContacto.name"
                    v-model="campoContacto.value"
                    :pattern="campoContacto.patron"
                    :type="campoContacto.tipo" 
                    :placeholder="campoContacto.placeholder" required>
                    <div :id="campoContacto.name" :class="campoContacto.claseTexto">{{campoContacto.texto}}</div>
                </div>
            </template>
            <template v-else-if="campoContacto.tipo == 'textarea'">
                <div class="col-sm-6 col-xl-3 label"><label>{{campoContacto.label}}</label></div>
                <div class="col-sm-6 col-xl-3 input">
                    <textarea  rows="5"
                    :class="campoContacto.claseCampo"
                    :name="campoContacto.name" 
                    v-model="campoContacto.value" 
                    :pattern="campoContacto.patron"
                    :placeholder="campoContacto.placeholder"
                    required>
                    </textarea>
                    <div :id="campoContacto.name" :class="campoContacto.claseTexto">{{campoContacto.texto}}</div>
                </div>
            </template>
        </template>
        <div class="col-sm-6 col-xl-3 label">
            <label><i class="fab fa-whatsapp"></i> Enviar por whatsapp: </label>
        </div>
        <div class="col-sm-6 col-xl-3 input">
            <button class="boton" type="submit" :disabled="disabled" value="Contactar"><i :class="contactarIco"></i>{{contactarTxt}}</button>
        </div>
    </form>
`

export const contact = {
    mounted() {
        /* verifica si hay almacenados datos del usuario y los lee */
        if (sessionStorage.getItem('contactEmail') != null) {
            this.camposContacto.ObjEmail.value = sessionStorage.getItem('contactEmail');
        } else if (localStorage.getItem('Email') != null) {
            this.camposContacto.ObjEmail.value = localStorage.getItem('Email');
        }
        if (sessionStorage.getItem('contactNombre') != null) {
            this.camposContacto.ObjNombre.value = sessionStorage.getItem('contactNombre');
        } else if (localStorage.getItem('Nombre') != null) {
            this.camposContacto.ObjNombre.value = localStorage.getItem('Nombre');
        }
        if (sessionStorage.getItem('contactApellido') != null) {
            this.camposContacto.ObjApellido.value = sessionStorage.getItem('contactApellido');
        } else if (localStorage.getItem('Apellido') != null) {
            this.camposContacto.ObjApellido.value = localStorage.getItem('Apellido');
        }
        if (sessionStorage.getItem('contactComments') != null) {
            this.camposContacto.ObjComments.value = sessionStorage.getItem('contactComments');
        }
    },
    template: `${tplContact}`,
    data: function() {
        return {
            camposContacto: camposContacto,
            disabled: false,
            contactarIco: "fab fa-whatsapp",
            contactarTxt: " Enviar por Whatsapp",
            urlDesktop: "https://web.whatsapp.com/",
            urlMobile: "whatsapp://",
            telefono: "5491159340014",
        }
    },
    /* leo en tiempo real los campos llamo a la funcion de validacion y los almaceno */
    watch: {
        'camposContacto.ObjNombre.value' (nuevo, viejo) {
            this.camposContacto.ObjNombre.validado = this.$patronChecker(nuevo, this.camposContacto.ObjNombre.patron);
            if (this.camposContacto.ObjNombre.validado) {
                this.camposContacto.ObjNombre.texto = 'todo ok';
                this.camposContacto.ObjNombre.claseTexto = 'mostrar ok';
                this.camposContacto.ObjNombre.claseCampo = 'campo campook';
            } else {
                this.camposContacto.ObjNombre.texto = this.camposContacto.ObjNombre.alerta;
                this.camposContacto.ObjNombre.claseTexto = 'mostrar alerta';
                this.camposContacto.ObjNombre.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('contactNombre', nuevo);
        },
        'camposContacto.ObjApellido.value' (nuevo, viejo) {
            this.camposContacto.ObjApellido.validado = this.$patronChecker(nuevo, this.camposContacto.ObjApellido.patron);
            if (this.camposContacto.ObjApellido.validado) {
                this.camposContacto.ObjApellido.texto = 'todo ok';
                this.camposContacto.ObjApellido.claseTexto = 'mostrar ok';
                this.camposContacto.ObjApellido.claseCampo = 'campo campook';
            } else {
                this.camposContacto.ObjApellido.texto = this.camposContacto.ObjApellido.alerta;
                this.camposContacto.ObjApellido.claseTexto = 'mostrar alerta';
                this.camposContacto.ObjApellido.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('contactApellido', nuevo);
        },
        'camposContacto.ObjEmail.value' (nuevo, viejo) {
            this.camposContacto.ObjEmail.validado = this.$patronChecker(nuevo, this.camposContacto.ObjEmail.patron);
            if (this.camposContacto.ObjEmail.validado) {
                this.camposContacto.ObjEmail.texto = 'todo ok';
                this.camposContacto.ObjEmail.claseTexto = 'mostrar ok';
                this.camposContacto.ObjEmail.claseCampo = 'campo campook';
            } else {
                this.camposContacto.ObjEmail.texto = this.camposContacto.ObjEmail.alerta;
                this.camposContacto.ObjEmail.claseTexto = 'mostrar alerta';
                this.camposContacto.ObjEmail.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('contactEmail', nuevo);
        },
        'camposContacto.ObjComments.value' (nuevo, viejo) {
            this.camposContacto.ObjComments.validado = this.$patronChecker(nuevo, this.camposContacto.ObjComments.patron);
            if (this.camposContacto.ObjComments.validado) {
                this.camposContacto.ObjComments.texto = 'todo ok';
                this.camposContacto.ObjComments.claseTexto = 'mostrar ok';
                this.camposContacto.ObjComments.claseCampo = 'campo campook';
            } else {
                this.camposContacto.ObjComments.texto = this.camposContacto.ObjComments.alerta;
                this.camposContacto.ObjComments.claseTexto = 'mostrar alerta';
                this.camposContacto.ObjComments.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('contactComments', nuevo);
        },
    },
    methods: {
        /* verifica la validacion y envía por WA */
        validateFormContact(e) {
            if (this.camposContacto.ObjComments.validado &&
                this.camposContacto.ObjEmail.validado &&
                this.camposContacto.ObjNombre.validado &&
                this.camposContacto.ObjApellido.validado) {
                this.contactarIco = "fas fa-circle-notch fa-spin";
                this.contactarTxt = "";
                this.disabled = true;
                setTimeout(() => {
                    window.open(this.urlWA, '_blank');
                    this.contactarIco = "fab fa-whatsapp";
                    this.contactarTxt = " Enviar WhatsApp";
                    this.disabled = false;
                }, 1000);
                setTimeout(() => { return true; }, 2000);
            }
            e.preventDefault();
        },
    },
    computed: {
        /* devuelve la url de WA para movile o desktop */
        urlWA() {
            let urlWhatsapp = "#";
            let commentsBr = this.camposContacto.ObjComments.value.replaceAll(/\r?\n/g, '%0A');
            let mensaje = 'send?phone=' + this.telefono + '&text=Nombre :' + this.camposContacto.ObjNombre.value + ' ' + this.camposContacto.ObjApellido.value + '%0ACorreo electrónico: ' + this.camposContacto.ObjEmail.value + '%0AMensaje:%0A' + commentsBr + ''
            if (isMobile()) {
                urlWhatsapp = this.urlMobile + mensaje;
            } else {
                urlWhatsapp = this.urlDesktop + mensaje;
            }
            return urlWhatsapp;
        }
    },
}

/* devuelve el valor movil true o desktop false */
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}