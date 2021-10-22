const tplSignup = `
<form id="registro" class="row g-3 registro"
action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="validateForm">
<div class="col-sm-12 titulo">Ingreso de usuarios</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input 
    name="nombre"
    v-model="nombre"
    pattern="^[a-zA-Z ]{2,254}$"
    type="text" class="campo campodefault" placeholder="Nombres"
        required>
    <div id="nombre" class="ok ocultar">
        Debe completar el Nombre
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="apellido"
    v-model="apellido"
    pattern="^[a-zA-Z ]{2,254}$"
     type="text" class="campo campodefault" placeholder="Apellido"
        required>
        <div id="apellido" class="ok ocultar">
        Debe completar el Apellido
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="email"
    v-model="email"
    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
    type="email" class="campo campodefault" placeholder="e-mail: usuario@dominio.com" required>
    <div id="email" class="ok ocultar">
        Complete un e-mail válido
        </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="celular"
    v-model="celular"
    type="tel" class="campo campodefault"
        pattern="[0-9]{2,4}-?\s?[0-9]{3,4}-?\s?[0-9]{3,4}"
        placeholder="Celular (sin 0 y sin 15): 11-4321-6789" required>
        <div id="celular" class="ok ocultar">
        Complete un número de teléfono válido
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <select
    name="proveedor"
    v-model="proveedor"
    class="campo campodefault" required>
        <option selected disabled value="">Proveedor de Telefonía...</option>
        <option value="Movistar">Movistar</option>
        <option value="Personal">Personal</option>
        <option value="Claro">Claro</option>
        <option value="Otro">Otro</option>
    </select>
    <div id="proveedor"class="ok ocultar" >
        Seleccione su companía de celular
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="nacimiento"
    v-model="nacimiento"
    type="date" class="campo campodefault" :max="hoyMenos18" required>
    <div id="nacimiento" class="ok ocultar">
        Complete una fecha de nacimiento mayor a 18 años
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input 
    name="password"
    v-model="password"
    type="password" class="campo campodefault"
        pattern="[0-9a-zA-Z^\S]{8,}" placeholder="Contraseña"required>
    <div id="password" class="ok ocultar">
        Complete una contraseña de la menos 8 caracteres sin espacios
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input 
    name="confirmpassword"
    v-model="confirmpassword"
    type="password" class="campo campodefault"
        pattern="[0-9a-zA-Z^\S]{8,}" placeholder="Repetir Contraseña"
        required>
        <div id="confirmpassword" class="ok ocultar">
        Las contraseñas no coínciden
    </div>
</div>
<div class="col-sm-6 col-md-6 col-xl-6">
    <div class="form-check ">
        <span class="contentswitch">
            <label class="switch">
                <input 
                name="acepta"
                v-model="acepta"
                type="checkbox" required>
                <span class="slider round"></span>
            </label>
        </span>
        <span class="lavelswitch">Acepto los términos y condiciones</span>
        <div id="acepta" class="ok ocultar">
            Debe aceptar los términos y condiciones
        </div>
    </div>
</div>
<div class="col-sm-6 col-md-6 col-xl-6">
    <button class="boton" type="submit">Suscribirse</button>
</div>
</form>
`
export const signup = {
    template: `${tplSignup}`,
    data: function() {
        return {
            nombre: "",
            apellido: "",
            celular: "",
            proveedor: "",
            email: "",
            password: "",
            confirmpassword: "",
            nacimiento: "",
            acepta: "",
            validado1: false,
            validado2: false,
            validado3: false,
            validado4: false,
            validado5: false,
            validado6: false,
            validado7: false,
            validado8: false,
            validado9: false,
        }
    },
    watch: {
        confirmpassword(nuevo, viejo) {
            let modelo = 'confirmpassword';
            let mensajealerta = 'Las contraseñas no coinciden';
            this.validado1 = validaConfirmPassword(nuevo, this.password, modelo, mensajealerta);

        },
        password(nuevo, viejo) {
            let modelo = 'password';
            let modelo2 = 'confirmpassword';
            let mensajealerta = 'Complete una contraseña de la menos 8 caracteres sin espacios';
            let mensajealerta2 = 'Las contraseñas no coinciden';
            this.validado2 = validaInput(nuevo, modelo, mensajealerta);
            this.validado1 = validaConfirmPassword(nuevo, this.confirmpassword, modelo2, mensajealerta2);
        },
        nombre(nuevo, viejo) {
            let modelo = 'nombre';
            let mensajealerta = 'Debe completar el Nombre';
            this.validado3 = validaInput(nuevo, modelo, mensajealerta);
        },
        apellido(nuevo, viejo) {
            let modelo = 'apellido';
            let mensajealerta = 'Debe completar el Apellido';
            this.validado4 = validaInput(nuevo, modelo, mensajealerta);
        },
        celular(nuevo, viejo) {
            let modelo = 'celular';
            let mensajealerta = 'Debe completar el celular';
            this.validado5 = validaInput(nuevo, modelo, mensajealerta);
        },
        email(nuevo, viejo) {
            let modelo = 'email';
            let mensajealerta = 'Debe completar un email válido';
            this.validado6 = validaInput(nuevo, modelo, mensajealerta);
        },
        proveedor(nuevo, viejo) {
            let modelo = 'proveedor';
            let mensajealerta = 'Debe seleccionar un proveedor';
            this.validado7 = validaSelect(nuevo, modelo, mensajealerta);
        },
        acepta(nuevo, viejo) {
            let modelo = 'acepta';
            let mensajealerta = 'Debe aceptar los términos y condiciones';
            this.validado8 = validaCheckbox(nuevo, modelo, mensajealerta);
        },
        nacimiento(nuevo, viejo) {
            let modelo = 'nacimiento';
            let mensajealerta = 'Debe completar su fecha de nacimiento';
            this.validado9 = validaDate(nuevo, modelo, mensajealerta);
        },
    },
    methods: {
        validateForm(e) {
            if (this.validado1 &&
                this.validado2 &&
                this.validado3 &&
                this.validado4 &&
                this.validado5 &&
                this.validado6 &&
                this.validado7 &&
                this.validado8 &&
                this.validado9) {
                return true;
            }
            e.preventDefault();
        },
    },
    computed: {
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
        }
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

function validaInput(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let patron = campo.getAttribute('pattern');
    patron = new RegExp(patron);
    let valida = false;
    if (patron.test(valor)) {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        valida = true;
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        valida = false;
    }
    return valida;
}

function validaConfirmPassword(valor1, valor2, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let valida = false;
    if (valor1 === valor2) {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        valida = true;
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        valida = false;
    }
    return valida;
}

function validaSelect(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let valida = false;
    if (valor != '' && valor != null) {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        valida = true;
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        valida = false;
    }
    return valida;
}

function validaCheckbox(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let valida = false;
    if (valor === true) {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        valida = true;
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        valida = false;
    }
    return valida;
}

function validaDate(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let valida = false;
    if (valor != null && valor != '') {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        valida = true;
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        valida = false;
    }
    return valida;
}