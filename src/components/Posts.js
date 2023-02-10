import { useState } from "react";

function Teste(dado) {

    const [BookIcon, setBookIcon] = useState(false);
    const [Like, setLike] = useState(false);
    const [NumCurtidas, setNumCurtidas] = useState(dado.numCurtidas);

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={dado.imagem} alt={dado.texto} />
                    {dado.texto}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={dado.imagemPost} alt={dado.textoPost} data-test="post-image"
                    onDoubleClick={() => {
                        if (!Like) {
                            setNumCurtidas(NumCurtidas + 1);
                        }
                        setLike(true);
                    }} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        {Like ? <ion-icon class="vermelho" name="heart" data-test="like-post"
                            onClick={() => {
                                setNumCurtidas(NumCurtidas - 1);
                                setLike(false);
                            }} /> :
                            <ion-icon class="" name="heart-outline" data-test="like-post"
                                onClick={() => {
                                    setNumCurtidas(NumCurtidas + 1);
                                    setLike(true);
                                }} />}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {BookIcon ? <ion-icon name="bookmark" data-test="save-post"
                            onClick={() => setBookIcon(false)} /> :
                            <ion-icon name="bookmark-outline" data-test="save-post"
                                onClick={() => setBookIcon(true)} />}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={dado.imagemCurtidas} alt={dado.nomeCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{dado.nomeCurtidas}</strong> e <strong data-test="likes-number">
                            outras {NumCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>);
}

export default function Posts() {

    const dados = [{
        imagem: "assets/img/meowed.svg",
        texto: "meowed",
        imagemPost: "assets/img/gato-telefone.svg",
        textoPost: "gato-telefone",
        imagemCurtidas: "assets/img/respondeai.svg",
        nomeCurtidas: "respondeai",
        numCurtidas: 101523
    }, {
        imagem: "assets/img/barked.svg",
        texto: "barked",
        imagemPost: "assets/img/dog.svg",
        textoPost: "dog",
        imagemCurtidas: "assets/img/adorable_animals.svg",
        nomeCurtidas: "adorable_animals",
        numCurtidas: 99159
    }, {
        imagem: "assets/img/meowed.svg",
        texto: "meowed",
        imagemPost: "assets/img/gato-telefone.svg",
        textoPost: "gato-telefone",
        imagemCurtidas: "assets/img/respondeai.svg",
        nomeCurtidas: "respondeai",
        numCurtidas: 101523
    }];

    return (
        <div class="posts">
            {dados.map(dado => Teste(dado))}
        </div>
    );
}