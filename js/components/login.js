/**********************************************/
/*            FORMULARIO DE LOGIN             */
/**********************************************/

const tplLogin = `
<form class="row g-3 login" action="https://www.w3schools.com/action_page.php" method="POST" target="__blank" v-on:submit="userLoginLocal">
    <div class="col-sm-12 titulo">Ingreso de usuarios</div>
    <div class="col-sm-12 col-md-6 col-xl-4">
        <label><i class="fas fa-at"></i></label>
        <input class="campo" type="email" name="email" v-model="email" placeholder="usuario@dominio.com" required>
    </div>
    <div class="col-sm-12 col-md-6 col-xl-4">
        <label><i class="fas fa-key"></i></label>
        <input class="campo" type="password" name="clave" v-model="password" placeholder="contraseña" required>
    </div>
    <div class="col-sm-12 col-md-6 col-xl-4"><label>
        <i class="fas fa-sign-in-alt"></i></label>
        <input type="submit" name="submit" class="boton" value="Ingresar">
    </div>
</form>
`

export const login = {
    template: `${tplLogin}`,
    data: function() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        /* graba el usuario en localstorage y redirecciona a movies */
        userLoginLocal(e) {
            if (this.email != null && this.password != null && this.email != '' && this.password != '') {
                try {
                    localStorage.setItem('usuario', this.email);
                    this.$root.logueado = true;
                    this.$root.actual = 'movies';
                } catch (error) {
                    console.error(error);
                }
                return true;
            }
            e.preventDefault();
        },
    },

}