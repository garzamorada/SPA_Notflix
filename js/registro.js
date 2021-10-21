const tplSignup = `
<form id="registro" class="row g-3 registro"
action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" @submit.prevent="validaSignup" novalidate>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input 
    name="nombre"
    v-model="nombre"
    type="text" class="campo" placeholder="Nombres"
        required>
    <div id="nombre" >
        Debe completar el Nombre
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="apellido"
    v-model="apellido"
     type="text" class="campo" placeholder="Apellido"
        required>
        <div id="apellido" >
        Debe completar el Apellido
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <div class="input-group has-validation">
        <input
        name="email"
        v-model="email"
        type="email" class="campo" placeholder="e-mail: usuario@dominio.com" required>
        <div id="email" >
            Complete un e-mail válido
        </div>
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="celular"
    v-model="celular"
    type="tel" class="campo"
        pattern="[0-9]{2,4}-?\s?[0-9]{3,4}-?\s?[0-9]{3,4}"
        placeholder="Celular (sin 0 y sin 15): 11-4321-6789" required>
        <div id="celular" >
        Complete un número de teléfono válido
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <select
    name="proveedor"
    v-model="proveedor"
    class="campo" required>
        <option selected disabled value="">Proveedor de Telefonía...</option>
        <option value="Movistar">Movistar</option>
        <option value="Personal">Personal</option>
        <option value="Claro">Claro</option>
        <option value="Otro">Otro</option>
    </select>
    <div id="proveedor" >
        Seleccione su companía de celular
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input
    name="nacimiento"
    v-model="nacimiento"
    type="date" class="campo" :max="hoyMenos18" required>
    <div id="nacimiento" >
        Complete una fecha de nacimiento mayor a 18 años
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input 
    name="password"
    v-model="password"
    type="password" class="campo"
        pattern="[0-9a-zA-Z^\S]{8,}" placeholder="Contraseña"required>
    <div id="password" >
        Complete una contraseña de la menos 8 caracteres sin espacios
    </div>
</div>
<div class="col-sm-12 col-md-6 col-xl-4">
    <input 
    name="confirmpassword"
    v-model="confirmpassword"
    type="password" class="campo"
        pattern="[0-9a-zA-Z^\S]{8,}" placeholder="Repetir Contraseña"
        required>
        <div id="confirmpassword" >
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
        <div id="acepta" class="alerta">
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
    data: function () {
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
        }
    },
    watch: {
        confirmpassword(nuevo, viejo) {
            let elemento = document.getElementById('confirmpassword');
            if (this.password === nuevo) {
                elemento.innerText = 'Todo en orden';
                elemento.classList.replace('ocultar', 'mostrar');
                elemento.classList.replace('alerta', 'ok');
            } else {
                elemento.innerText = 'Las contraseñas no coinciden';
                elemento.classList.replace('ocultar', 'mostrar');
                elemento.classList.replace('ok', 'alerta');
            }
        },

    },
    methods: {
        validaSignup() {

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