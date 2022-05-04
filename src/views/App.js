//Com a extensao Simple React Snippets instalada, utlize o atalho imr para importar o react automaticamente e sfc para criar o componente

import React from 'react'; 
import Basico from '../components/Basico';
import Css from '../components/Css';
import Props from '../components/Props';
/*
No caso abaixo vemos como importar diferentes componentes React vindos de um mesmo arquivo
*/
import Props_2 from '../components/Props_2';
import { Props_estruturadas } from '../components/Props_2';


//Neste arquvio esta a demonstração da ultilização de varios components react dentro de uma mesma pagina.
const App = () => {
    return ( 
        <>
            <Basico />
            <Props name="Matheus"/>
            <Props_2 name="Bruno" idade="22" cidade="Bebedouro" estado="SP"/>
            <Props_estruturadas name="Bruno" idade="22" cidade="Bebedouro" estado="SP"/>
            <Css />
        </>
     );
}
 
export default App;
