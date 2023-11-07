import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState(''); //Es usestate puede ser un string en blanto(' ')

    /*const onImputCanged=(event)=>{
        console.log(event.target.value); //sin desesturar 
        setinputValue(event.target.value)
    }*/
    const onInputChange=({target})=>{
              //desestructurado
        setInputValue(target.value);
    }

    const onSubmit=( event )=>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
       // setCategories( categories=>([inputValue,...categories]));
       onNewCategory(inputValue.trim());
       setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
    type="text"
    placeholder='Escribe una cateoría'
    value={ inputValue }
    onChange={ onInputChange} />
    </form>
    
    
  )
}

