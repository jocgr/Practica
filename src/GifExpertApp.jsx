import React from 'react'
import { useState,useEffect } from 'react';
import { AddCategory,GifGrid } from './components';

import { GifItem } from './components/GifItem';






export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    const onAddCategory=(newCategory)=>{
      if (categories.includes(newCategory)) return;
      console.log('acivado')
      console.log(newCategory);
      setCategories([newCategory, ...categories]);
      //setCategories(['Valorant', ...categories]);
      //setCategories(([newCategory,...categories]));
      //([...categories,'Spederman']); //otra forma de hacerlo
     //setCategories([...cat=>[cat,'Spederman']]); //otra forma de hacerlo
        //setCategories(['Spederman...,categories']); //otra forma de hacerlo esta lo imprime de primero
    }
 
  return (
    <>

    <h1>GifExpertApp</h1>
    <h2>Hola</h2>
    
        <AddCategory 
        onNewCategory={ (value)=>onAddCategory(value) }/>
 
          {categories.map((category)=>(
           //<li key={category}> { category }</li>
           <GifGrid key={category} category={category}/>
           ))
          
          }
        
       
    
    </>
        
  )
}
