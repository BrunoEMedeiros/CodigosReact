import React from 'react';

/*
Propriedades são valores passados para um componente, podemos ultiliza-lo para passar valores de um componente para o outro,
as Props são vistas como parametros dos componentes React, vistos e usados da mesma maneira que em um função javascript.
*/
const Props = (props) => {
    return ( 
        <>
        <h2>Ola {props.name}, bem vindo ao react</h2>
        </>
     );
}
 
export default Props;