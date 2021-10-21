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