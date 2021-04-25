import React from 'react'

import {Gift} from './Gift.js';


export const ListaCategoria = ({Categorias}) => {
    
    return (
        <>
            {
                Categorias.map((Category,i) => (
                   
                    <Gift 
                    key={i}
                    Category={Category} 
                    />
                    
                ))
            }
            
        </>
    )
}
