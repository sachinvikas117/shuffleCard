import React from "react";
import useFetch from "../hooks/useFetch";

export const CardContext=React.createContext()

const useCard=()=>{
    const [loading,error,data]=useFetch("")
    

}



export const cartdContextProvider=(props)=>{
    return(<CardContext.Provider>
        {props.children}
    </CardContext.Provider>)

}
