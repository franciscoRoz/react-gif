import React from 'react'
import {ImgGrid} from './ImgGrid'

export default function LoadGift({images}) {
    return (
        <>
            {
               images.map((img) => (
                   <ImgGrid 
                   key={img.id}
                   {...img}
                    />
               ))
            }
        </>
    )
}
