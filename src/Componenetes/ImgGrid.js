import React from 'react'

export const ImgGrid = ({ title, url }) => {

    return (
        <div id="Card" className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
