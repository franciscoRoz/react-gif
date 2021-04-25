import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [Input, SetInput] = useState('')
    
    const handdleChange = (e)=> {
        SetInput(e.target.value);
    }
    
    const handleadd=(e)=>{
        e.preventDefault();

        if(Input.trim().length>0){
            setCategorias( cats => [ Input, ...cats, ] );
            SetInput('');
        }
    }

    return (
        <>
        <form onSubmit={handleadd}>
            <input
            type='Text'
            value={Input}
            onChange={handdleChange}
            />    
            
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
