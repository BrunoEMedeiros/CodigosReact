import React from 'react';

/*
É possivel receber varias propriedades dentro de um componente React
*/
const Props_2 = (props) => {
    return ( 
        <>
        <h2>Ola {props.name}, bem vindo ao react</h2>
        <h2>Voce tem {props.idade}</h2>
        <h2>Mora na cidade {props.cidade}</h2>
        <h2>Que fica no estado {props.estado}</h2>
        </>
     );
}

/*
Assim como é possivel deixar mais "agradavel" a sintaxe das props, ultizando um recurso do javascript chamado Structured, 
onde fica da seguinte maneira
*/

const Props_estruturadas = ({name, idade, cidade, estado}) => {
    return ( 
        <>
        <h2>Ola {name}, bem vindo ao react</h2>
        <h2>Voce tem {idade}</h2>
        <h2>Mora na cidade {cidade}</h2>
        <h2>Que fica no estado {estado}</h2>
        </>
     );
}

//Neste exemplo vemos como exportar multiplos componentes dentro do React, lembre-se é OBRIGATÓRIO no minimo uma linha export default por arquivo
export default Props_2;
export {Props_estruturadas};