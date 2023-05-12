import {getGif} from "../helpers/getGift";
import {useEffect, useState} from "react";


export const useFetchGifts = (category) => {

    const[images, setImagenes] =  useState([])
    const[isLoading, setIsLoading] =  useState(true)

    // useEffect( () =>{
    //
    //     getGif(category)
    //         .then(newImages => {
    //             setImagenes(newImages);
    //             setIsLoading(false);
    //         } );
    //
    // }, [])

    const getImagenes = async() =>{

        const newImages = await getGif(category);
        setImagenes(newImages);
        setIsLoading(false);

    }

    useEffect(
        ()=>{
            getImagenes();
        }, []);

    return{
        images,
        isLoading
    }
}
