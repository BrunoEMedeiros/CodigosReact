import React from 'react';

const Basico = () => {
    //usando variaveis dentro do componente React
    const nome = 'Bruno'

    //Usando funções javascript dentro do react
    function soma(x, y) {
        return x + y
    }

    return ( 
        <>
            <h1>Ultilizando variaveis em componentes React</h1>
            <h2>Meu nome é: {nome}</h2>
            <h2>A soma dos valores é {soma(10, 5)}</h2>
        </>
    );
}
 
export default Basico;