import React from 'react';

/*
    É possivel linkar arquivos css com paginas completas ou exclusivo para components do React,
    para isso ultilizamos o Css Modules
*/ 

import styles from '../components/css/css.module.css'

const Css = () => {
    return ( 
    <>
    <div className={styles.cssContainer}>
        <p>Testando a formatação de css no componente</p>
    </div>
    </> 
    );
}
 
export default Css;