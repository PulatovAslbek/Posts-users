import { createContext, useState, useEffect } from "react";

let Context = createContext()

function Provider({children}){

    const [state, setState] = useState(JSON.parse(window.localStorage.getItem('token')) || false)

    useEffect(() =>{
        window.localStorage.setItem('token', JSON.stringify(state))
    }, [state])
    

    return(<>
        <Context.Provider value={{state, setState}}>{children}</Context.Provider>
    </>)
}

export {Provider, Context}