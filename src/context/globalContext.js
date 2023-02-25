import React, {createContext, useEffect, useReducer, useState} from "react";


export const GlobalContext = createContext()


export const GlobalProvider = ({children}) => {
    const[imgOpen,setOpenImg] = useState({state:false,path:''})

    const changeImgState= (path)=>{
        if(path!==''){
            setOpenImg({state: !imgOpen.state,path:path})
        }else {
            setOpenImg({state:false,path:''})
        }
    }

    return (
        <GlobalContext.Provider value={{
            imgOpen,changeImgState
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
