import { useState } from "react";

export default function Usuario(props) {

    const [ImgPerfil, setImgPerfil] = useState(props.imagem);
    const [Nome, setNome] = useState(props.texto);

    return (
        <div class="usuario">
            <img src={ImgPerfil} alt="imagem de perfil" onClick={() => {
                const url = prompt("Digite a url da sua imagem!");
                url ? setImgPerfil(url) : alert("Url invalida");
            }} />
            <div class="texto">
                <span>
                    <strong>{Nome}</strong>
                    <ion-icon name="pencil" onClick={() => {
                        const nome = prompt("Digite o seu nome!");
                        nome ? setNome(nome) : alert("Nome invalido");
                    }} />
                </span>
            </div>
        </div>
    );
}