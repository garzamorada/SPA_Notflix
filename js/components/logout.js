/**********************************************/
/*                    LOGOUT                  */
/**********************************************/
const tplLogout = `
<div v-on:load class="row g-3 login">
    <div class="col-sm-12 titulo">
        <h3>Hasta la próxima</h3>
        <p>Rediriginado al home...</p>
    </div>
</div>
`
    /* borra el usuario de localstorage y redirecciona al home */
export const logout = {
    template: `${tplLogout}`,
    mounted() {
        localStorage.removeItem('usuario');
        localStorage.clear();
        this.$root.logueado = false;
        this.$root.actual = 'index';
    },

}