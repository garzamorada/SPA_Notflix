const tplOptions = `
<form id="options" class="row g-3 options" action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="validateFormOptions">
<div class="col-12 titulo">
    Opciones de Usuario
</div>
<div class="col-sm-6 col-xl-3 label"><label>Enviar notificaciones por correo electrónico:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <label class="switch">
        <input 
        v-model="SuscripCorreo" 
        name="SuscripCorreo" type="checkbox" value="on">
        <span class="slider round"></span>
    </label>
</div>
<div class="col-sm-6 col-xl-3 label"><label>Enviar notificaciones por celular:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <label class="switch">
        <input 
        v-model="SuscripCelular" 
        name="SuscripCelular" type="checkbox" value="on">
        <span class="slider round"></span>
    </label>
</div>
<div class="col-sm-6 col-xl-3 label"><label>Cambiar correo electrónico:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <input class="campo campodefault" 
    name="email"
    v-model="email"
    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
    type="email" 
    placeholder="e-mail: usuario@dominio.com">
    <div id="email" class="ok ocultar">Todo ok</div>
</div>
<div class="col-sm-6 col-xl-3 label"><label>Cambiar número de celular:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <input class="campo campodefault" 
    name="celular"
    v-model="celular"
    pattern="[0-9]{2,4}-?\s?[0-9]{3,4}-?\s?[0-9]{3,4}"
    type="tel" 
    placeholder="Celular (sin 0 y sin 15): 11-4321-6789">
    <div id="celular" class="ok ocultar">Todo ok</div>
</div>
<div class="col-sm-6 col-xl-3 label"><label>Cambiar companía de celular:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <select 
    class="campo campodefault"
    v-model="proveedor"
    name="proveedor">
        <option selected disabled value="">Proveedor de Telefonía...</option>
        <option value="Movistar">Movistar</option>
        <option value="Personal">Personal</option>
        <option value="Claro">Claro</option>
        <option value="Otro">Otro</option>
    </select>
    <div id="proveedor" class="ok ocultar">Todo ok</div>
</div>
<div class="col-sm-6 col-xl-3 label"><label>Cambiar contraseña:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <input 
    class="campo campodefault" 
    type="password" 
    name="password"
    v-model="password"
    pattern="[0-9a-zA-Z^\S]{8,}"
    placeholder="Contraseña">
    <div id="password" class="ok ocultar">Todo ok</div>
</div>
<div class="col-sm-6 col-xl-3 label"><label>Confirmar contraseña nueva:</label></div>
<div class="col-sm-6 col-xl-3 input">
    <input class="campo campodefault" type="password" 
    name="confirmpassword"
    v-model="confirmpassword"
    pattern="[0-9a-zA-Z^\S]{8,}"
    placeholder="Repetir Contraseña">
    <div id="confirmpassword" class="ok ocultar">Todo ok</div>
</div>
<div class="col-sm-12 col-xl-6 submit"><button name="submit" class="boton " type="submit ">Guardar Cambios</button>
</div>
</form>
`

export const options = {
    mounted() {
        if (localStorage.getItem('SuscripCorreo') != null) {
            this.SuscripCorreo = localStorage.getItem('SuscripCorreo');
        }
        if (localStorage.getItem('SuscripCelular') != null) {
            this.SuscripCelular = localStorage.getItem('SuscripCelular');
        }
        if (localStorage.getItem('celular') != null) {
            this.celular = localStorage.getItem('celular');
        }
        if (localStorage.getItem('proveedor') != null) {
            this.proveedor = localStorage.getItem('proveedor');
        }
        if (localStorage.getItem('email') != null) {
            this.email = localStorage.getItem('email');
        }
        if (localStorage.getItem('password') != null) {
            this.password = localStorage.getItem('password');
        }
        if (localStorage.getItem('confirmpassword') != null) {
            this.confirmpassword = localStorage.getItem('confirmpassword');
        }
    },
    template: `${tplOptions}`,
    data: function() {
        return {
            SuscripCorreo: null,
            SuscripCelular: null,
            celular: "",
            proveedor: "",
            email: "",
            password: "",
            confirmpassword: "",
            confirm: false,
        }
    },
    watch: {
        SuscripCorreo(nuevo, viejo) {
            if (nuevo == false) {
                nuevo = '';
            }
            localStorage.setItem('SuscripCorreo', nuevo);
        },
        SuscripCelular(nuevo, viejo) {
            if (nuevo == false) {
                nuevo = '';
            }
            localStorage.setItem('SuscripCelular', nuevo);
        },
        confirmpassword(nuevo, viejo) {
            let modelo = 'confirmpassword';
            let mensajealerta = 'Las contraseñas no coinciden';
            this.confirm = validaConfirmPasswordOptions(nuevo, this.password, modelo, mensajealerta);
        },
        password(nuevo, viejo) {
            let modelo = 'password';
            let modelo2 = 'confirmpassword';
            let mensajealerta = 'Complete una contraseña de la menos 8 caracteres sin espacios';
            let mensajealerta2 = 'Las contraseñas no coinciden';
            validaInputOptions(nuevo, modelo, mensajealerta);
            this.confirm = validaConfirmPasswordOptions(nuevo, this.confirmpassword, modelo2, mensajealerta2);
        },
        celular(nuevo, viejo) {
            let modelo = 'celular';
            let mensajealerta = 'Debe completar el celular';
            validaInputOptions(nuevo, modelo, mensajealerta);
        },
        email(nuevo, viejo) {
            let modelo = 'email';
            let mensajealerta = 'Debe completar un email válido';
            validaInputOptions(nuevo, modelo, mensajealerta);
        },
        proveedor(nuevo, viejo) {
            let modelo = 'proveedor';
            let mensajealerta = 'Debe seleccionar un proveedor';
            validaSelectOptions(nuevo, modelo, mensajealerta);
        },
    },
    methods: {
        validateFormOptions(e) {
            if (this.confirm & this.password != '' & this.password != null); {
                localStorage.setItem('password', this.password);
                localStorage.setItem('confirmpassword', this.password);
            }
            localStorage.setItem('email', this.email);
            localStorage.setItem('usuario', this.email);
            localStorage.setItem('celular', this.celular);
            localStorage.setItem('proveedor', this.proveedor);
            return true;
            e.preventDefault();
        },
    },
}


function validaInputOptions(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    let patron = campo.getAttribute('pattern');
    patron = new RegExp(patron);
    if (patron.test(valor) || valor == null || valor == '') {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
    }
}

function validaSelectOptions(valor, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    if (valor != '' && valor != null) {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
    }
}

function validaConfirmPasswordOptions(valor1, valor2, modelo, mensajealerta) {
    let elemento = document.getElementById(modelo);
    let campo = document.getElementsByName(modelo)[0];
    if (valor1 === valor2) {
        elemento.innerText = 'Todo en orden';
        elemento.className = 'mostrar ok';
        campo.className = 'campo campook';
        return true
    } else {
        elemento.innerText = mensajealerta;
        elemento.className = 'mostrar alerta';
        campo.className = 'campo campoalerta';
        return false
    }
}