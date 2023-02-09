export default function Stories() {

    const dados = [{
        imagem: "../public/assets/img/9gag.svg",
        texto: "9gag"
    }, {
        imagem: "../public/assets/img/meowed.svg",
        texto: "meowed"
    }, {
        imagem: "../public/assets/img/barked.svg",
        texto: "barked"
    }, {
        imagem: "../public/assets/img/nathanwpylestrangeplanet.svg",
        texto: "nathanwpylestrangeplanet"
    }, {
        imagem: "../public/assets/img/wawawicomics.svg",
        texto: "wawawicomics"
    }, {
        imagem: "../public/assets/img/respondeai.svg",
        texto: "respondeai"
    }, {
        imagem: "../public/assets/img/filomoderna.svg",
        texto: "filomoderna"
    }, {
        imagem: "../public/assets/img/memeriagourmet.svg",
        texto: "memeriagourmet"
    }]

    return (
        <div class="stories">
            {dados.map(dado =>
                <div class="story">
                    <div class="imagem">
                        <img src={dado.imagem} alt={dado.texto} />
                    </div>
                    <div class="usuario">
                        {dado.texto}
                    </div>
                </div>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}