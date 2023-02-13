export default function Stories() {

    const dados = [{
        imagem: "assets/img/9gag.svg",
        texto: "9gag"
    }, {
        imagem: "assets/img/meowed.svg",
        texto: "meowed"
    }, {
        imagem: "assets/img/barked.svg",
        texto: "barked"
    }, {
        imagem: "assets/img/nathanwpylestrangeplanet.svg",
        texto: "nathanwpylestrangeplanet"
    }, {
        imagem: "assets/img/wawawicomics.svg",
        texto: "wawawicomics"
    }, {
        imagem: "assets/img/respondeai.svg",
        texto: "respondeai"
    }, {
        imagem: "assets/img/filomoderna.svg",
        texto: "filomoderna"
    }, {
        imagem: "assets/img/memeriagourmet.svg",
        texto: "memeriagourmet"
    }];

    return (
        <div className="stories">
            {dados.map( (dado, index) =>
                <div key={index} className="story">
                    <div className="imagem">
                        <img src={dado.imagem} alt={dado.texto} />
                    </div>
                    <div className="usuario">
                        {dado.texto}
                    </div>
                </div>)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}