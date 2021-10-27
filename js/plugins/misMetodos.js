export const MisMetodos = {
    install: function (Vue, options) {
        // compara el valor con el patron recibido por defcto letras y nuermos con espacios
        Vue.patronChecker = function (valor, patron = '^[A-Za-z0-9\s]+$') { 
            patron = new RegExp(patron);
            let validado = false;
            if (patron.test(valor)) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // compara dos contraseñas
        Vue.confirmPasswordChecker = function (valor1, valor2) {
            let validado = false;
            if (valor1 === valor2) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // revisa que se haya selecionado una opcion del menu
        Vue.selectChecker = function (valor) {
            let validado = false;
            if (valor != '' && valor != null) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // revisa que se haya ingresado una fecha en formato válido por defecto YYYY-MM-DD
        Vue.dateChecker = function (valor,  patron ='^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$') {
            patron = new RegExp(patron);
            let validado = false;
            if (valor != '' && valor != null && valor.test(patron)) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // revisa que se haya tildado un checkbox
        Vue.checkboxChecker = function (valor, actived= 'on') {
            let validado = false;
            if (valor === true || varlor === actived){
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // compara el valor con el patron recibido por defcto letras y nuermos con espacios
        Vue.prototype.$patronChecker = function (valor, patron) {
            patron = new RegExp(patron);
            let validado = false;
            if (patron.test(valor)) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // compara dos contraseñas
        Vue.prototype.$confirmPasswordChecker = function (valor1, valor2) {
            let validado = false;
            if (valor1 === valor2) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // revisa que se haya selecionado una opcion del menu
        Vue.prototype.$selectChecker = function (valor) {
            let validado = false;
            if (valor != '' && valor != null) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // revisa que se haya ingresado una fecha en formato válido por defecto YYYY-MM-DD
        Vue.prototype.$dateChecker = function (valor, patron ='^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$') {
            patron = new RegExp(patron);
            let validado = false;
            if (valor != '' && valor != null && valor.test(patron)) {
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
        // revisa que se haya tildado un checkbox
        Vue.prototype.$checkboxChecker = function (valor, actived= 'on') {
            let validado = false;
            if (valor === true || varlor === actived){
                validado = true;
            } else {
                validado = false;
            }
            return validado;
        }
    }
}