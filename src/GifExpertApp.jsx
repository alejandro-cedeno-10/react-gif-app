import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState([ 'Dragon ball']);


    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return(
        <>
        {/*  titulo  */}
        <h1>
            GifExpertApp
        </h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory = { onAddCategory }
            />



            {
                categories.map( (categoria) => (
                  <GifGrid
                      key={categoria}
                      category={categoria}
                  />
              ))
            }

        </>

    )

}
