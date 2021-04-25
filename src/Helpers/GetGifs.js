export const getGif= async(Category) =>{

    const url =`https://api.giphy.com/v1/gifs/search?api_key=B8o6rg1QH0lPD5GCi8QraA8l6cH9WEFs&q=${encodeURI( Category )}&limit=10`
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gif = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    
    return gif;
    }