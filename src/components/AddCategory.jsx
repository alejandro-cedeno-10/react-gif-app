import {useState} from "react";

export const AddCategory = (
    // { setCategories }
    {onNewCategory}
    ) =>{

    const [inputValue, setInputValue] = useState('One punch')

    const onInputChange = ( {target} ) =>{
        setInputValue(target.value)
    }

    const onSubtmit = (event) =>{
        event.preventDefault();

        if(inputValue.trim().length < 1) return;


        // setCategories( (categories) => [...categories, inputValue])

        onNewCategory(inputValue.trim())

        setInputValue('');
    }

    return(
            <form onSubmit={(event => onSubtmit(event) )}>
                <input type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={ onInputChange}
                />
            </form>
    )

}
