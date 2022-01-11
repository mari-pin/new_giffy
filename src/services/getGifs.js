
const apiKey = 'y3IBEetAnof9j12Oi5jD4rNzwcEd0c8n'



export default function getGifs ({keyword = 'panda'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch( apiURL)
     .then(res => res.json())
     .then (response =>{
       const {data = []} = response 
       if (Array.isArray(data)){const gifs = data.map(image => image.images.downsized_medium.url)
       return gifs
      }
       
     },[])
    //setGifs(DIFFERENT_GIFS)
}