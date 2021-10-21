var plantilla = `
            <li class="nav-item">
                <a class="nav-link" :class="seleccion" href="#" @click="$emit('cambia-pagina-actual')"><i :class="iclass"></i>{{nombre}}</a>
            </li>`;

export const barra = {
    props: ['link', 'nombre', 'iclass', 'seleccion'],
    template: `${plantilla}`,
}