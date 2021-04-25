import React, { useState } from 'react'

import {AddCategory} from './Componenetes/AddCategory.js';
import { Gift } from './Componenetes/Gift.js';

const GiftExpertApp = () => {

    const [Categorias, setCategorias] = useState(['papa'])

   

    return(
    <>
    <h2>GiftExpertApp</h2>
        <AddCategory setCategorias={setCategorias} />
            
        <hr/>
    <ol>
        {Categorias.map(category=>(
           
            <Gift 
            key={category}
            Category={category} 
            />
        ))} 

    </ol>
    </>
    )
}

export default GiftExpertApp;