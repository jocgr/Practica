export const getGif=async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search/?api_key=qG9S7Jo1IWySe6fyZVcr3K4G9fUY2rOm&q=${category}&limit=10`
    const resp=await fetch( url );
    const{data}= await resp.json();
   
    const gifs=data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

}))

    
    return gifs;
}       
