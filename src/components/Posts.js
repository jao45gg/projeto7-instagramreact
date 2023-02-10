import { useState } from "react";

export default function Posts() {

    function Acoes(props) {

        const [BookIcon, setBookIcon] = useState(false);
        const [Like, setLike] = useState(false);

        if(props.state === true)
            setLike(true);

        return (
            <div class="acoes">
                <div>
                    {Like ? <ion-icon class="vermelho" name="heart" onClick={() => setLike(false)} /> :
                        <ion-icon class="" name="heart-outline" onClick={() => setLike(true)} />}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    {BookIcon ? <ion-icon name="bookmark" onClick={() => setBookIcon(false)} /> :
                        <ion-icon name="bookmark-outline" onClick={() => setBookIcon(true)} />}
                </div>
            </div>
        );
    }

    const dados = [{
        imagem: "assets/img/meowed.svg",
        texto: "meowed",
        imagemPost: "assets/img/gato-telefone.svg",
        textoPost: "gato-telefone",
        imagemCurtidas: "assets/img/respondeai.svg",
        nomeCurtidas: "respondeai",
        numCurtidas: "101.523"
    }, {
        imagem: "assets/img/barked.svg",
        texto: "barked",
        imagemPost: "assets/img/dog.svg",
        textoPost: "dog",
        imagemCurtidas: "assets/img/adorable_animals.svg",
        nomeCurtidas: "adorable_animals",
        numCurtidas: "99.159"
    }, {
        imagem: "assets/img/meowed.svg",
        texto: "meowed",
        imagemPost: "assets/img/gato-telefone.svg",
        textoPost: "gato-telefone",
        imagemCurtidas: "assets/img/respondeai.svg",
        nomeCurtidas: "respondeai",
        numCurtidas: "101.523"
    }];

    let [likeState,setlikeState] = useState(false);

    return (
        <div class="posts">
            {dados.map(dado =>
                <div class="post">
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
                        <img src={dado.imagemPost} alt={dado.textoPost} onDoubleClick={() => setlikeState(true)} />
                    </div>
                    <div class="fundo">
                        <Acoes state={likeState}/>

                        <div class="curtidas">
                            <img src={dado.imagemCurtidas} alt={dado.nomeCurtidas} />
                            <div class="texto">
                                Curtido por <strong>{dado.nomeCurtidas}</strong> e <strong>outras {dado.numCurtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}