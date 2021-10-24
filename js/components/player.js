/**********************************************/
/*       COSNTRUCTOR DE IFRAME PLAYER         */
/**********************************************/


const tplPlayer = `
<div class="containerPlayer">
    <div class="titulo">
        {{titulo}}
    </div>
    <iframe class="iframeMovie " :src="urlYoutube " :title="titulo" frameborder="0 " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen></iframe>
</div>
`
    /* construyo el iframe de youtube */
export const player = {
    template: `${tplPlayer}`,
    props: ['titulo', 'youtube'],
    computed: {
        urlYoutube() {
            return 'https://www.youtube.com/embed/' + this.youtube;
        }
    }
}