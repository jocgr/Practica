import { useState,useEffect } from "react";
import { getGif } from "../helpers/GetGif";

export const usefetchGifs = (category) => {
  // const apiKey='qG9S7Jo1IWySe6fyZVcr3K4G9fUY2rOm';

    //const peticion=fetch(` http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

   const [images,setImages]=useState([]);
   const [isLoading,setIsloading]=useState(true)
    const getImages=async()=>{
      const newImages=await getGif(category);
      setImages(newImages);
      setIsloading(false);



    }

    useEffect(() => {
     getImages();
    
      
    
        }, [])

    return{
        images,
        isLoading,
        
    }
}
