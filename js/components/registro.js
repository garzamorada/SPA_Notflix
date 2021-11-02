import { camposRegistro } from "../data/config.js"
/**********************************************/
/*          FORMULARIO DE REGISTRO            */
/**********************************************/


const tplSignup = `
<form id="registro" class="row g-3 registro"
action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="validateForm">
    <div class="col-sm-12 titulo">Alta de usuarios</div>
    <div v-for="campoRegistro in camposRegistro" class="col-sm-12 col-md-6 col-xl-4">
        <template v-if="campoRegistro.tipo == 'text' || campoRegistro.tipo == 'email' || campoRegistro.tipo == 'tel' || campoRegistro.tipo == 'password'">
            <input 
            :name="campoRegistro.name"
            v-model="campoRegistro.value"
            :pattern="campoRegistro.patron"
            :type="campoRegistro.tipo" 
            :class="campoRegistro.claseCampo" 
            :placeholder="campoRegistro.placeholder"
            :required="campoRegistro.required">
            <div :id="campoRegistro.nombre" :class="campoRegistro.claseTexto">
                {{campoRegistro.texto}}
            </div>
        </template>
        <template v-else-if="campoRegistro.tipo == 'select'">
            <select 
            :name="campoRegistro.name"
            v-model="campoRegistro.value"
            :pattern="campoRegistro.patron"
            :type="campoRegistro.tipo" 
            :class="campoRegistro.claseCampo" 
            required>
                <option selected disabled value="">Proveedor de Telefonía...</option>
                <option value="Movistar">Movistar</option>
                <option value="Personal">Personal</option>
                <option value="Claro">Claro</option>
                <option value="Otro">Otro</option>
            </select>
            <div :id="campoRegistro.name" :class="campoRegistro.claseTexto" >
                {{campoRegistro.texto}}
            </div>
        </template>
        <template v-else-if="campoRegistro.tipo == 'date'">
            <input
            :name="campoRegistro.name"
            v-model="campoRegistro.value"
            :pattern="campoRegistro.patron"
            :type="campoRegistro.tipo" 
            :class="campoRegistro.claseCampo" 
            :max="hoyMenos18" required>
            <div :id="campoRegistro.name" :class="campoRegistro.claseTexto">
                {{campoRegistro.texto}}
            </div>
        </template>
        <template v-else-if="campoRegistro.tipo == 'checkbox'">
            <div class="form-check ">
                <span class="contentswitch">
                    <label class="switch">
                        <input 
                        :name="campoRegistro.name"
                        v-model="campoRegistro.value"
                        :type="campoRegistro.tipo"
                        required>
                        <span class="slider round"></span>
                    </label>
                </span>
                <span class="lavelswitch">Acepto los términos y condiciones</span>
            </div>
            <div :id="campoRegistro.name" :class="campoRegistro.claseTexto" >
                {{campoRegistro.texto}}
            </div>
        </template>
    </div>
    <div class="col-sm-6 col-md-6 col-xl-6">
        <button class="boton" type="submit">Suscribirse</button>
    </div>
</form>
`
export const signup = {
    mounted() {
        console.log(this.camposRegistro);
        /* leo los datos de sessionstorage */
        if (sessionStorage.getItem('SuscripCorreo') != null) {
            this.SuscripCorreo = sessionStorage.getItem('SuscripCorreo');
        }
        if (sessionStorage.getItem('SuscripCelular') != null) {
            this.SuscripCelular = sessionStorage.getItem('SuscripCelular');
        }
        if (sessionStorage.getItem('Celular') != null) {
            this.camposRegistro.ObjCelular.value = sessionStorage.getItem('Celular');
        }
        if (sessionStorage.getItem('Proveedor') != null) {
            this.camposRegistro.ObjProveedor.value = sessionStorage.getItem('Proveedor');
        }
        if (sessionStorage.getItem('Email') != null) {
            this.camposRegistro.ObjEmail.value = sessionStorage.getItem('Email');
        }
        if (sessionStorage.getItem('Password') != null) {
            // this.camposRegistro.ObjPassword.value = sessionStorage.getItem('Password');
        }
        if (sessionStorage.getItem('ConfirmPassword') != null) {
            //  this.camposRegistro.ObjConfirmPassword.value = sessionStorage.getItem('ConfirmPassword');
        }
        if (sessionStorage.getItem('Nombre') != null) {
            this.camposRegistro.ObjNombre.value = sessionStorage.getItem('Nombre');
        }
        if (sessionStorage.getItem('Apellido') != null) {
            this.camposRegistro.ObjApellido.value = sessionStorage.getItem('Apellido');
        }
        if (sessionStorage.getItem('Nacimiento') != null) {
            this.camposRegistro.ObjNacimiento.value = sessionStorage.getItem('Nacimiento');
        }

    },
    template: `${tplSignup}`,
    data: function() {
        return {
            camposRegistro: camposRegistro,
        }
    },
    watch: {
        /* chequeo en tiempo real que los campos cumplan con los patrones y que las claves sean iguales,
           guardo los datos en sessionstorage */
        'camposRegistro.ObjConfirmPassword.value' (nuevo, viejo) {
            this.camposRegistro.ObjConfirmPassword.validado = this.$confirmPasswordChecker(nuevo, this.camposRegistro.ObjPassword.value);
            if (this.camposRegistro.ObjConfirmPassword.validado) {
                this.camposRegistro.ObjConfirmPassword.texto = 'todo ok';
                this.camposRegistro.ObjConfirmPassword.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjConfirmPassword.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjConfirmPassword.texto = this.camposRegistro.ObjConfirmPassword.alerta;
                this.camposRegistro.ObjConfirmPassword.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjConfirmPassword.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('ConfirmPassword', nuevo);

        },
        'camposRegistro.ObjPassword.value' (nuevo, viejo) {
            this.camposRegistro.ObjPassword.validado = this.$patronChecker(nuevo, this.camposRegistro.ObjPassword.patron);
            if (this.camposRegistro.ObjPassword.validado) {
                this.camposRegistro.ObjPassword.texto = 'todo ok';
                this.camposRegistro.ObjPassword.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjPassword.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjPassword.texto = this.camposRegistro.ObjPassword.alerta;
                this.camposRegistro.ObjPassword.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjPassword.claseCampo = 'campo campoalerta';
            }
            this.camposRegistro.ObjConfirmPassword.validado = this.$confirmPasswordChecker(nuevo, this.camposRegistro.ObjConfirmPassword.value);
            if (this.camposRegistro.ObjConfirmPassword.validado) {
                this.camposRegistro.ObjConfirmPassword.texto = 'todo ok';
                this.camposRegistro.ObjConfirmPassword.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjConfirmPassword.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjConfirmPassword.texto = this.camposRegistro.ObjConfirmPassword.alerta;
                this.camposRegistro.ObjConfirmPassword.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjConfirmPassword.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Password', nuevo);
        },
        'camposRegistro.ObjNombre.value' (nuevo, viejo) {
            this.camposRegistro.ObjNombre.validado = this.$patronChecker(nuevo, this.camposRegistro.ObjNombre.patron);
            if (this.camposRegistro.ObjNombre.validado) {
                this.camposRegistro.ObjNombre.texto = 'todo ok';
                this.camposRegistro.ObjNombre.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjNombre.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjNombre.texto = this.camposRegistro.ObjNombre.alerta;
                this.camposRegistro.ObjNombre.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjNombre.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Nombre', nuevo);
        },
        'camposRegistro.ObjApellido.value' (nuevo, viejo) {
            this.camposRegistro.ObjApellido.validado = this.$patronChecker(nuevo, this.camposRegistro.ObjApellido.patron);
            if (this.camposRegistro.ObjApellido.validado) {
                this.camposRegistro.ObjApellido.texto = 'todo ok';
                this.camposRegistro.ObjApellido.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjApellido.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjApellido.texto = this.camposRegistro.ObjApellido.alerta;
                this.camposRegistro.ObjApellido.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjApellido.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Apellido', nuevo);
        },
        'camposRegistro.ObjCelular.value' (nuevo, viejo) {
            this.camposRegistro.ObjCelular.validado = this.$patronChecker(nuevo, this.camposRegistro.ObjCelular.patron);
            if (this.camposRegistro.ObjCelular.validado) {
                this.camposRegistro.ObjCelular.texto = 'todo ok';
                this.camposRegistro.ObjCelular.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjCelular.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjCelular.texto = this.camposRegistro.ObjCelular.alerta;
                this.camposRegistro.ObjCelular.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjCelular.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Celular', nuevo);
        },
        'camposRegistro.ObjEmail.value' (nuevo, viejo) {
            this.camposRegistro.ObjEmail.validado = this.$patronChecker(nuevo, this.camposRegistro.ObjEmail.patron);
            if (this.camposRegistro.ObjEmail.validado) {
                this.camposRegistro.ObjEmail.texto = 'todo ok';
                this.camposRegistro.ObjEmail.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjEmail.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjEmail.texto = this.camposRegistro.ObjEmail.alerta;
                this.camposRegistro.ObjEmail.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjEmail.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Email', nuevo);
        },
        'camposRegistro.ObjProveedor.value' (nuevo, viejo) {
            this.camposRegistro.ObjProveedor.validado = this.$selectChecker(nuevo);
            if (this.camposRegistro.ObjProveedor.validado) {
                this.camposRegistro.ObjProveedor.texto = 'todo ok';
                this.camposRegistro.ObjProveedor.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjProveedor.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjProveedor.texto = this.camposRegistro.ObjProveedor.alerta;
                this.camposRegistro.ObjProveedor.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjProveedor.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Proveedor', nuevo);
        },
        'camposRegistro.ObjAcepta.value' (nuevo, viejo) {
            this.camposRegistro.ObjAcepta.validado = this.$checkboxChecker(nuevo);
            if (this.camposRegistro.ObjAcepta.validado) {
                this.camposRegistro.ObjAcepta.texto = 'todo ok';
                this.camposRegistro.ObjAcepta.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjAcepta.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjAcepta.texto = this.camposRegistro.ObjAcepta.alerta;
                this.camposRegistro.ObjAcepta.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjAcepta.claseCampo = 'campo campoalerta';
            }
        },
        'camposRegistro.ObjNacimiento.value' (nuevo, viejo) {
            this.camposRegistro.ObjNacimiento.validado = this.$dateChecker(nuevo);
            if (this.camposRegistro.ObjNacimiento.validado) {
                this.camposRegistro.ObjNacimiento.texto = 'todo ok';
                this.camposRegistro.ObjNacimiento.claseTexto = 'mostrar ok';
                this.camposRegistro.ObjNacimiento.claseCampo = 'campo campook';
            } else {
                this.camposRegistro.ObjNacimiento.texto = this.camposRegistro.ObjNacimiento.alerta;
                this.camposRegistro.ObjNacimiento.claseTexto = 'mostrar alerta';
                this.camposRegistro.ObjNacimiento.claseCampo = 'campo campoalerta';
            }
            sessionStorage.setItem('Nacimiento', nuevo);
        },
    },
    methods: {
        /* valida el formulario y guarda los datos en localstorage */
        validateForm(e) {
            if (this.camposRegistro.ObjNombre.validado &&
                this.camposRegistro.ObjApellido.validado &&
                this.camposRegistro.ObjEmail.validado &&
                this.camposRegistro.ObjCelular.validado &&
                this.camposRegistro.ObjProveedor.validado &&
                this.camposRegistro.ObjPassword.validado &&
                this.camposRegistro.ObjConfirmPassword.validado &&
                this.camposRegistro.ObjNacimiento.validado &&
                this.camposRegistro.ObjAcepta.validado) {
                localStorage.setItem('Nacimiento', this.camposRegistro.ObjNacimiento.value);
                localStorage.setItem('Email', this.camposRegistro.ObjEmail.value);
                localStorage.setItem('usuario', this.camposRegistro.ObjEmail.value);
                localStorage.setItem('Nombre', this.camposRegistro.ObjNombre.value);
                localStorage.setItem('Apellido', this.camposRegistro.ObjApellido.value);
                localStorage.setItem('Celular', this.camposRegistro.ObjCelular.value);
                localStorage.setItem('Proveedor', this.camposRegistro.ObjProveedor.value);
                localStorage.setItem('Password', this.camposRegistro.ObjPassword.value);
                localStorage.setItem('ConfirmPassword', this.camposRegistro.ObjPassword.value);
                localStorage.setItem('SuscripCorreo', '');
                localStorage.setItem('SuscripCelular', '');
                this.$root.actual = 'login';
                return true;
            }
            e.preventDefault();
        },
    },
    computed: {
        /* establece el mínimo de 18 años para el registro */
        hoyMenos18() {
            var fecha = new Date();
            var mes = getMM(fecha);
            var dia = getDD(fecha);
            var anio = fecha.getFullYear() - 18;
            var fechaMaxima = (anio + "-" + mes + "-" + dia);
            return fechaMaxima;
        },
        alerta(opcion) {
            return opcion;
        },
    }
}


/******************************************/
/* defino minimo 18 años para el registro */
/******************************************/

function getMM(date) {
    let mes = date.getMonth() + 1;
    return mes < 10 ? '0' + mes : '' + mes; // ('' + mes) agrega un 0 si es menor a 10 y convierte a string
}

function getDD(date) {
    let dia = date.getDate();
    return dia < 10 ? '0' + dia : '' + dia; // ('' + dia) agrega un 0 si es menor a 10 y convierte a string
}