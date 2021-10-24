/**********************************************/
/*          FORMULARIO DE CONTACTO            */
/**********************************************/

const tplContact = `
    <form class="row g-3 options" action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="validateFormContact($event)">
        <div class="col-12 titulo">
            Contactanos con tus preguntas
        </div>
        <div class="col-sm-6 col-xl-3 label"><label>Nombres:</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <input class="campo" name="nombre" v-model="nombre" pattern="^[a-zA-Z ]{2,254}$" type="text" placeholder="Nombres" required>
            <div id="nombre" class="ok ocultar">Todo ok</div>
        </div>
        <div class="col-sm-6 col-xl-3 label"><label>Apellido:</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <input class="campo" name="apellido" v-model="apellido" pattern="^[a-zA-Z ]{2,254}$" type="text" placeholder="Apellido" required>
            <div id="apellido" class="ok ocultar">Todo ok</div>
        </div>
        <div class="col-sm-6 col-xl-3 label"><label>Correo electrónico:</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <input class="campo" v-model="email" name="email" type="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder="usuario@dominio.com" required>
            <div id="email" class="ok ocultar">Todo ok</div>
        </div>
        <div class="col-sm-6 col-xl-3 label"><label>Ingresa tu mensaje:</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <textarea class="campo" rows="5" name="comments" v-model="comments" pattern="^[0-9a-zA-Zá-ü«#$%&/()=*\.\n\r ]{5,512}$" placeholder="Escribí aquí tu comentario" required>
            </textarea>
            <div id="comments" class="ok ocultar">Todo ok</div>
        </div>
        <div class="col-sm-6 col-xl-3 label">
            <label><i class="fab fa-whatsapp"></i> Enviar por whatsapp: </label>
        </div>
        <div class="col-sm-6 col-xl-3 input">
            <button class="boton" type="submit" :disabled=disabled value="Contactar"><i :class="contactarIco"></i>{{contactarTxt}}</button>
        </div>
    </form>
`

export const contact = {
    mounted() {
        /* verifica si hay almacenados datos del usuario y los lee */
        if (sessionStorage.getItem('contactEmail') != null) {
            this.email = sessionStorage.getItem('contactEmail');
        } else if (localStorage.getItem('email') != null) {
            this.email = localStorage.getItem('email');
        }
        if (sessionStorage.getItem('contactNombre') != null) {
            this.nombre = sessionStorage.getItem('contactNombre');
        } else if (localStorage.getItem('nombre') != null) {
            this.nombre = localStorage.getItem('nombre');
        }
        if (sessionStorage.getItem('contactApellido') != null) {
            this.apellido = sessionStorage.getItem('contactApellido');
        } else if (localStorage.getItem('apellido') != null) {
            this.apellido = localStorage.getItem('apellido');
        }
        if (sessionStorage.getItem('contactComments') != null) {
            this.comments = sessionStorage.getItem('contactComments');
        }
    },
    template: `${tplContact}`,
    data: function() {
        return {
            nombre: "",
            apellido: "",
            email: "",
            comments: "",
            contactarIco: "fab fa-whatsapp",
            contactarTxt: " Enviar por Whatsapp",
            disabled: false,
            validNombre: false,
            validApellido: false,
            validEmail: false,
            validComments: false,
            urlDesktop: "https://web.whatsapp.com/",
            urlMobile: "whatsapp://",
            telefono: "5491159340014",
        }
    },
    watch: {
        /* leo en tiempo real los campos llamo a la funcion de validacion y los almaceno */
        nombre(nuevo, viejo) {
            let modelo = 'nombre';
            let mensajealerta = 'Debe completar su Nombre';
            this.validNombre = validaInputConatct(nuevo, modelo, mensajealerta);
            sessionStorage.setItem('contactNombre', nuevo);
        },
        apellido(nuevo, viejo) {
            let modelo = 'apellido';
            let mensajealerta = 'Debe completar su Apellido';
            this.validApellido = validaInputConatct(nuevo, modelo, mensajealerta);
            sessionStorage.setItem('contactApellido', nuevo);
        },
        email(nuevo, viejo) {
            let modelo = 'email';
            let mensajealerta = 'Debe completar su e-mail';
            this.validEmail = validaInputConatct(nuevo, modelo, mensajealerta);
            sessionStorage.setItem('contactEmail', nuevo);
        },
        comments(nuevo, viejo) {
            let modelo = 'comments';
            let mensajealerta = 'Debe dejar un comentario';
            this.validComments = validaInputConatct(nuevo, modelo, mensajealerta);
            sessionStorage.setItem('contactComments', nuevo);
        },
    },
    methods: {
        /* verifica la validacion y envía por WA */
        validateFormContact(e) {
            if (this.validComments & this.validEmail & this.validNombre & this.validApellido) {
                this.contactarIco = "fas fa-circle-notch fa-spin";
                this.contactarTxt = "";
                this.disabled = true;
                setTimeout(() => {
                    let commentsBr = this.comments.replaceAll(/\r?\n/g, '%0A');
                    let mensaje = 'send?phone=' + this.telefono + '&text=Nombre :' + this.nombre + ' ' + this.apellido + '%0ACorreo electrónico: ' + this.email + '%0AMensaje:%0A' + commentsBr + ''
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
            let commentsBr = this.comments.replaceAll(/\r?\n/g, '%0A');
            let mensaje = 'send?phone=' + this.telefono + '&text=Nombre :' + this.nombre + ' ' + this.apellido + '%0ACorreo electrónico: ' + this.email + '%0AMensaje:%0A' + commentsBr + ''
            if (isMobile()) {
                urlWhatsapp = this.urlMobile + mensaje;
            } else {
                urlWhatsapp = this.urlDesktop + mensaje;
            }
            return urlWhatsapp;
        }
    },
}

/* valida los campos de contacto por los patterns */
function validaInputConatct(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let patron = campo.getAttribute('pattern');
    let confirm = false;
    patron = new RegExp(patron);
    if (patron.test(valor) || valor == null || valor == '') {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        confirm = true;
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        confirm = false;
    }
    return confirm;
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