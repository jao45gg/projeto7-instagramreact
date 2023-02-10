import { useState } from "react";

export default function Usuario(props) {

    const [ImgPerfil, setImgPerfil] = useState(props.imagem);
    const [Nome, setNome] = useState(props.texto);

    return (
        <div class="usuario">
            <img src={ImgPerfil} alt="imagem de perfil" onClick={() => setImgPerfil(prompt("Digite o link de sua imagem!"))}/>
            <div class="texto">
                <span>
                    <strong>{Nome}</strong>
                    <ion-icon name="pencil" onClick={() => setNome(prompt("Digite o seu nome!"))} />
                </span>
            </div>
        </div>
    );
}