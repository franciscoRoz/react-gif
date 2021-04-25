import { useState, useEffect } from 'react'
import { getGif } from '../Helpers/GetGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGif( category )
            .then( imgs => {
                console.log(category);
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])




    return state; // { data:[], loading: true };
}
