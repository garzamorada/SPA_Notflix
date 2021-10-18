                <figure v-for="pelicula in peliculas" class="peliculas movie-mostrar" :class=pelicula.categoria>
                    <a :href=urlhref(pelicula.youtube,pelicula.titulo)>
                        <img :src=urlimg(pelicula.imagen)>
                    </a>
                    <figcaption>
                        {{pelicula.titulo}}
                    </figcaption>
                </figure>