/**********************************************/
/*          OPCIONES DE CONFIGURACION         */
/**********************************************/

/* lista de elementos de la barra de navegacion */
export const navbar = [{
        link: "index",
        iclass: "fas fa-home",
        nombre: "Home",
        requiereLogin: null,
    },
    {
        link: "movies",
        iclass: "fa fa-film",
        nombre: "Peliculas",
        requiereLogin: true,
    },
    {
        link: "options",
        iclass: "fas fa-users-cog",
        nombre: "Opciones",
        requiereLogin: true,
    },
    {
        link: "logout",
        iclass: "fas fa-user-times",
        nombre: "Salir",
        requiereLogin: true,
    },
    {
        link: "contact",
        iclass: "fas fa-envelope-open-text",
        nombre: "Contactanos",
        requiereLogin: null,
    },
    {
        link: "login",
        iclass: "fas fa-user",
        nombre: "Ingresar",
        requiereLogin: false,
    },
    {
        link: "signup",
        iclass: "fas fa-user-plus",
        nombre: "Registrarse",
        requiereLogin: false,
    }
];

/* campos del formulario de contacto */
export const camposContacto = {
    ObjNombre: {
        label: "Nombres:",
        value: "",
        name: "Nombre",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Zá-ü ]{2,254}$",
        validado: false,
        alerta: 'Debe completar el Nombre',
        tipo: 'text',
        placeholder: 'Nombres',
        required: 'required'
    },
    ObjApellido: {
        label: "Apellido:",
        value: "",
        name: "Apellido",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Zá-ü ]{2,254}$",
        validado: false,
        alerta: 'Debe completar el Apellido',
        tipo: 'text',
        placeholder: 'Apellido',
        required: 'required'
    },
    ObjEmail: {
        label: "Correo Electrónico:",
        value: "",
        name: "Email",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        validado: false,
        alerta: 'Debe completar un Email válido',
        tipo: 'email',
        placeholder: 'e-mail: usuario@dominio.com',
        required: 'required'
    },
    ObjComments: {
        label: "Ingresa tu mensaje:",
        value: "",
        name: "Comments",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[0-9a-zA-Zá-ü«#$%&/()=*\.\n\r ]{5,512}$",
        validado: false,
        alerta: 'Debe dejar un mensaje',
        tipo: 'textarea',
        placeholder: 'Deje aqui su mensaje',
        required: 'required'
    },
}

/* campos del formulario de registro */

export const camposRegistro = {
    ObjNombre: {
        value: "",
        name: "Nombre",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Zá-ü ]{2,254}$",
        validado: false,
        alerta: 'Debe completar el Nombre',
        tipo: 'text',
        placeholder: 'Nombres',
        required: 'required'
    },
    ObjApellido: {
        value: "",
        name: "Apellido",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Zá-ü ]{2,254}$",
        validado: false,
        alerta: 'Debe completar el Apellido',
        tipo: 'text',
        placeholder: 'Apellido',
        required: 'required'
    },
    ObjEmail: {
        value: "",
        name: "Email",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        validado: false,
        alerta: 'Debe completar un Email válido',
        tipo: 'email',
        placeholder: 'e-mail: usuario@dominio.com',
        required: 'required'
    },
    ObjCelular: {
        value: "",
        name: "Celular",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9]{2,4}-?\s?[0-9]{3,4}-?\s?[0-9]{3,4}",
        validado: false,
        alerta: 'Debe completar el Celular',
        tipo: 'tel',
        placeholder: 'Celular (sin 0 y sin 15): 11-4321-6789',
        required: 'required'
    },
    ObjProveedor: {
        value: "",
        name: "Proveedor",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Zá-ü ]{2,254}$",
        validado: false,
        alerta: 'Debe seleccionar un Proveedor',
        tipo: 'select',
        required: 'required'
    },
    ObjNacimiento: {
        value: "",
        name: "Nacimiento",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9\-/]{8,}",
        validado: false,
        alerta: 'Debe completar su fecha de nacimiento y debe ser mayor a 18 años de edad',
        tipo: 'date',
        placeholder: '',
        required: 'required'
    },
    ObjPassword: {
        value: "",
        name: "Password",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9a-zA-Z^\S]{8,}",
        validado: false,
        alerta: 'Complete una contraseña de la menos 8 caracteres sin espacios',
        tipo: 'password',
        placeholder: 'Contraseña',
        required: 'required'
    },
    ObjConfirmPassword: {
        value: "",
        name: "ConfirmPassword",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9a-zA-Z^\S]{8,}",
        validado: false,
        alerta: 'Las contraseñas no coinciden',
        tipo: 'password',
        placeholder: 'Confirmación de Contraseña',
        required: 'required'
    },
    ObjAcepta: {
        value: "",
        name: "Acepta",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "",
        validado: false,
        alerta: 'Debe aceptar los términos y condiciones',
        tipo: 'checkbox',
        placeholder: '',
        required: 'required'
    },
}

/* campos del formulario de opciones */

export const camposOpciones = {
    ObjEmail: {
        label: "Cambiar correo electrónico:",
        value: "usuario@dominio.com",
        name: "Email",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        validado: false,
        alerta: 'Debe completar un Email válido',
        tipo: 'email',
        placeholder: 'e-mail: usuario@dominio.com',
        required: 'required'
    },
    ObjCelular: {
        label: "Cambiar número de celular:",
        value: "1112345678",
        name: "Celular",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9]{2,4}-?\s?[0-9]{3,4}-?\s?[0-9]{3,4}",
        validado: false,
        alerta: 'Debe completar el Celular',
        tipo: 'tel',
        placeholder: 'Celular (sin 0 y sin 15): 11-4321-6789',
        required: 'required'
    },
    ObjProveedor: {
        label: "Cambiar companía de celular:",
        value: "Claro",
        name: "Proveedor",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "^[a-zA-Zá-ü ]{2,254}$",
        validado: false,
        alerta: 'Debe seleccionar un Proveedor',
        tipo: 'select',
        required: 'required'
    },
    ObjPassword: {
        label: "Cambiar contraseña:",
        value: "",
        name: "Password",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9a-zA-Z^\S]{8,}",
        validado: false,
        alerta: 'Complete una contraseña de la menos 8 caracteres sin espacios',
        tipo: 'password',
        placeholder: 'Contraseña',
        required: 'required'
    },
    ObjConfirmPassword: {
        label: "Confirmar contraseña nueva:",
        value: "",
        name: "ConfirmPassword",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "[0-9a-zA-Z^\S]{8,}",
        validado: false,
        alerta: 'Las contraseñas no coinciden',
        tipo: 'password',
        placeholder: 'Confirmación de Contraseña',
        required: 'required'
    },
    ObjSuscripCorreo: {
        label: "Enviar notificaciones por correo electrónico:",
        value: null,
        name: "SuscripCorreo",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "",
        validado: false,
        alerta: '',
        tipo: 'checkbox',
        placeholder: '',
        required: ''
    },
    ObjSuscripCelular: {
        label: "Enviar notificaciones por celular:",
        value: null,
        name: "SuscripCelular",
        claseTexto: "ok ocultar",
        claseCampo: "campo campodefault",
        texto: "",
        patron: "",
        validado: false,
        alerta: '',
        tipo: 'checkbox',
        placeholder: '',
        required: ''
    },
}