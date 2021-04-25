import React from 'react'
import {useFetchGifs} from '../Hooks/useFetchGifs'

import LoadGift from './LoadGift'

export const Gift = ({Category}) => {

    
    const {data , loading} = useFetchGifs(Category);
    
    
    
    return (
        <>
        <h3 className="card animate__animated animate__fadeIn">{Category}</h3>
        {loading && 'cargando'}
        
        <div className="Card-grid">
           <LoadGift images={data} />
        </div> 
        </>
    )
}
