import { camposOpciones } from "../data/config.js"
/**********************************************/
/*       FORMULARIO OPCIONES DE USUARIO       */
/**********************************************/


const tplOptions = `
<form id="options" class="row g-3 options" action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="validateFormOptions">
<div class="col-12 titulo">
    Opciones de Usuario
</div>
<template v-for="campoOpciones in camposOpciones">
    <template v-if="campoOpciones.tipo == 'checkbox'">
        <div class="col-sm-6 col-xl-3 label"><label>{{campoOpciones.label}}</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <label class="switch">
                <input 
                v-model="campoOpciones.value" 
                :name="campoOpciones.name" 
                :type="campoOpciones.tipo" value="on">
                <span class="slider round"></span>
            </label>
        </div>
    </template>
    <template v-else-if="campoOpciones.tipo == 'text' || campoOpciones.tipo == 'tel' || campoOpciones.tipo == 'email' || campoOpciones.tipo == 'password'">
        <div class="col-sm-6 col-xl-3 label"><label>{{campoOpciones.label}}</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <input :class="campoOpciones.claseCampo" 
            :name="campoOpciones.name"
            v-model="campoOpciones.value"
            :pattern="campoOpciones.patron"
            :type="campoOpciones.tipo" 
            :placeholder="campoOpciones.placeholder">
            <div :id="campoOpciones.name" :class="campoOpciones.claseTexto">{{campoOpciones.texto}}</div>
        </div>
    </template>
    <template v-else-if="campoOpciones.tipo == 'select'">
        <div class="col-sm-6 col-xl-3 label"><label>{{campoOpciones.label}}</label></div>
        <div class="col-sm-6 col-xl-3 input">
            <select 
            :class="campoOpciones.claseCampo" 
            :name="campoOpciones.name"
            v-model="campoOpciones.value">
                <option selected disabled value="">Proveedor de Telefonía...</option>
                <option value="Movistar">Movistar</option>
                <option value="Personal">Personal</option>
                <option value="Claro">Claro</option>
                <option value="Otro">Otro</option>
            </select>
            <div :id="campoOpciones.name" :class="campoOpciones.claseTexto">{{campoOpciones.texto}}</div>
        </div>
    </template>
</template>
<div class="col-sm-12 col-xl-6 submit"><button name="submit" class="boton " type="submit ">Guardar Cambios</button>
</div>
</form>
`

export const options = {
    mounted() {
        /* lee los datos del usuario en localstorage */
        if (localStorage.getItem('SuscripCorreo') != null) {
            this.camposOpciones.ObjSuscripCorreo.value = localStorage.getItem('SuscripCorreo');
        }
        if (localStorage.getItem('SuscripCelular') != null) {
            this.camposOpciones.ObjSuscripCelular.value = localStorage.getItem('SuscripCelular');
        }
        if (localStorage.getItem('Celular') != null) {
            this.camposOpciones.ObjCelular.value = localStorage.getItem('Celular');
        }
        if (localStorage.getItem('Proveedor') != null) {
            this.camposOpciones.ObjProveedor.value = localStorage.getItem('Proveedor');
        }
        if (localStorage.getItem('Email') != null) {
            this.camposOpciones.ObjEmail.value = localStorage.getItem('Email');
        }
        if (localStorage.getItem('Password') != null) {
            // this.camposOpciones.ObjPassword.value = localStorage.getItem('Password');
        }
        if (localStorage.getItem('ConfirmPassword') != null) {
            //  this.camposOpciones.ObjConfirmPassword.value = localStorage.getItem('ConfirmPassword');
        }
    },
    template: `${tplOptions}`,
    data: function() {
        return {
            /* datos por defecto para que no queden vacios */
            camposOpciones: camposOpciones,
        }
    },
    watch: {
        /* valida en tiempo real los datos y  los almacena */
        'camposOpciones.ObjSuscripCorreo.value' (nuevo, viejo) {
            if (nuevo == false) {
                nuevo = '';
            }
            localStorage.setItem('SuscripCorreo', nuevo);
        },
        'camposOpciones.ObjSuscripCelular.value' (nuevo, viejo) {
            if (nuevo == false) {
                nuevo = '';
            }
            localStorage.setItem('SuscripCelular', nuevo);
        },
        'camposOpciones.ObjConfirmPassword.value' (nuevo, viejo) {
            this.camposOpciones.ObjConfirmPassword.validado = this.$confirmPasswordChecker(nuevo, this.camposOpciones.ObjPassword.value);
            if (this.camposOpciones.ObjConfirmPassword.validado) {
                this.camposOpciones.ObjConfirmPassword.texto = 'todo ok';
                this.camposOpciones.ObjConfirmPassword.claseTexto = 'mostrar ok';
                this.camposOpciones.ObjConfirmPassword.claseCampo = 'campo campook';
            } else {
                this.camposOpciones.ObjConfirmPassword.texto = this.camposOpciones.ObjConfirmPassword.alerta;
                this.camposOpciones.ObjConfirmPassword.claseTexto = 'mostrar alerta';
                this.camposOpciones.ObjConfirmPassword.claseCampo = 'campo campoalerta';
            }
            localStorage.setItem('ConfirmPassword', nuevo);
        },
        'camposOpciones.ObjPassword.value' (nuevo, viejo) {
            this.camposOpciones.ObjPassword.validado = this.$patronChecker(nuevo, this.camposOpciones.ObjPassword.patron);
            if (this.camposOpciones.ObjPassword.validado) {
                this.camposOpciones.ObjPassword.texto = 'todo ok';
                this.camposOpciones.ObjPassword.claseTexto = 'mostrar ok';
                this.camposOpciones.ObjPassword.claseCampo = 'campo campook';
            } else {
                this.camposOpciones.ObjPassword.texto = this.camposOpciones.ObjPassword.alerta;
                this.camposOpciones.ObjPassword.claseTexto = 'mostrar alerta';
                this.camposOpciones.ObjPassword.claseCampo = 'campo campoalerta';
            }
            this.camposOpciones.ObjConfirmPassword.validado = this.$confirmPasswordChecker(nuevo, this.camposOpciones.ObjConfirmPassword.value);
            if (this.camposOpciones.ObjConfirmPassword.validado) {
                this.camposOpciones.ObjConfirmPassword.texto = 'todo ok';
                this.camposOpciones.ObjConfirmPassword.claseTexto = 'mostrar ok';
                this.camposOpciones.ObjConfirmPassword.claseCampo = 'campo campook';
            } else {
                this.camposOpciones.ObjConfirmPassword.texto = this.camposOpciones.ObjConfirmPassword.alerta;
                this.camposOpciones.ObjConfirmPassword.claseTexto = 'mostrar alerta';
                this.camposOpciones.ObjConfirmPassword.claseCampo = 'campo campoalerta';
            }
            localStorage.setItem('Password', nuevo);
        },
        'camposOpciones.ObjCelular.value' (nuevo, viejo) {
            this.camposOpciones.ObjCelular.validado = this.$patronChecker(nuevo, this.camposOpciones.ObjCelular.patron);
            if (this.camposOpciones.ObjCelular.validado) {
                this.camposOpciones.ObjCelular.texto = 'todo ok';
                this.camposOpciones.ObjCelular.claseTexto = 'mostrar ok';
                this.camposOpciones.ObjCelular.claseCampo = 'campo campook';
            } else {
                this.camposOpciones.ObjCelular.texto = this.camposOpciones.ObjCelular.alerta;
                this.camposOpciones.ObjCelular.claseTexto = 'mostrar alerta';
                this.camposOpciones.ObjCelular.claseCampo = 'campo campoalerta';
            }
            localStorage.setItem('Celular', nuevo);
        },
        'camposOpciones.ObjEmail.value' (nuevo, viejo) {
            this.camposOpciones.ObjEmail.validado = this.$patronChecker(nuevo, this.camposOpciones.ObjEmail.patron);
            if (this.camposOpciones.ObjEmail.validado) {
                this.camposOpciones.ObjEmail.texto = 'todo ok';
                this.camposOpciones.ObjEmail.claseTexto = 'mostrar ok';
                this.camposOpciones.ObjEmail.claseCampo = 'campo campook';
            } else {
                this.camposOpciones.ObjEmail.texto = this.camposOpciones.ObjEmail.alerta;
                this.camposOpciones.ObjEmail.claseTexto = 'mostrar alerta';
                this.camposOpciones.ObjEmail.claseCampo = 'campo campoalerta';
            }
            localStorage.setItem('Email', nuevo);
        },
        'camposOpciones.ObjProveedor.value' (nuevo, viejo) {
            this.camposOpciones.ObjProveedor.validado = this.$selectChecker(nuevo);
            if (this.camposOpciones.ObjProveedor.validado) {
                this.camposOpciones.ObjProveedor.texto = 'todo ok';
                this.camposOpciones.ObjProveedor.claseTexto = 'mostrar ok';
                this.camposOpciones.ObjProveedor.claseCampo = 'campo campook';
            } else {
                this.camposOpciones.ObjProveedor.texto = this.camposOpciones.ObjProveedor.alerta;
                this.camposOpciones.ObjProveedor.claseTexto = 'mostrar alerta';
                this.camposOpciones.ObjProveedor.claseCampo = 'campo campoalerta';
            }
            localStorage.setItem('Proveedor', nuevo);
        },
    },
    methods: {
        /* valida que el password no este vacío y guarda los datos del formulario */
        validateFormOptions(e) {
            if (this.camposOpciones.ObjPassword.value != '' &&
                this.camposOpciones.ObjPassword.value != null &&
                this.camposOpciones.ObjPassword.validado &&
                this.camposOpciones.ObjConfirmPassword.validado); {
                localStorage.setItem('Password', this.camposOpciones.ObjPassword.value);
                localStorage.setItem('ConfirmPassword', this.camposOpciones.ObjPassword.value);
            }
            if (this.camposOpciones.ObjEmail.value != '' &&
                this.camposOpciones.ObjEmail.value != null &&
                this.camposOpciones.ObjEmail.validado); {
                localStorage.setItem('Email', this.camposOpciones.ObjEmail.value);
                localStorage.setItem('usuario', this.camposOpciones.ObjEmail.value);
            }
            if (this.camposOpciones.ObjCelular.value != '' &&
                this.camposOpciones.ObjCelular.value != null &&
                this.camposOpciones.ObjCelular.validado); {
                localStorage.setItem('Celular', this.camposOpciones.ObjCelular.value);
            }
            if (this.camposOpciones.ObjProveedor.value != '' &&
                this.camposOpciones.ObjProveedor.value != null &&
                this.camposOpciones.ObjProveedor.validado); {
                localStorage.setItem('Proveedor', this.camposOpciones.ObjProveedor.value);
            }
            return true;
        },
    },
}