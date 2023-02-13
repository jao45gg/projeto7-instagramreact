export default function Sugestoes() {

    const dados = [{
        imagem: "assets/img/bad.vibes.memes.svg",
        texto: "9gag"
    }, {
        imagem: "assets/img/chibirdart.svg",
        texto: "chibirdart"
    }, {
        imagem: "assets/img/razoesparaacreditar.svg",
        texto: "razoesparaacreditar"
    }, {
        imagem: "assets/img/adorable_animals.svg",
        texto: "adorable_animals"
    }, {
        imagem: "assets/img/smallcutecats.svg",
        texto: "smallcutecats"
    }];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {dados.map( (dado, index) =>
                <div key={index} className="sugestao">
                    <div className="usuario">
                        <img src={dado.imagem} alt={dado.texto} />
                        <div className="texto">
                            <div className="nome">{dado.texto}</div>
                            <div className="razao">Segue você</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                </div>)}
        </div>);

}