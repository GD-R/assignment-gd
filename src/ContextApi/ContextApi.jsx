import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext();

const useStateContext = () => {
    return useContext(AppContext);
}






const ContextApi = ({children}) => {


    
    

    const [burger, setBurger] = useState(false);
    const [menu, setMenu] = useState(false);
    const [tab, setTab] = useState('all');
    const [dialog, setDialog] = useState(false);
    const [itemValue, setItemValue] = useState("")
    const [subId, setSubId] = useState("")

    

   

    const allStates = {
        burger,
        setBurger,
        menu,
        setMenu,
        tab,
        setTab,
        dialog, 
        setDialog,
        itemValue, 
        setItemValue,
        subId, 
        setSubId
        
    }


  return (
    <AppContext.Provider value={{allStates}}>
            {children}
          
    </AppContext.Provider>
  )
}

export default ContextApi
export {useStateContext}
