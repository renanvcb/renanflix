import React from 'react';

function ButtonLink(props) {
    //props = propriedades passadas por quem chama o componente
    //Children = tudo o que está contido na tag
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;