import React, { createContext, ReactNode, useContext, useState } from 'react'


interface theme {
    theme: {
        backgroundColor: string;
        color: string;
    };
    isDark: boolean;
    togglemeet: () => void;
}

const themeContext = createContext<theme>( {} as theme )



const themes  = {
    dark : {
        backgroundColor : 'black',
        color : 'white' 
    } ,

    white : {
        backgroundColor : 'white',
        color : 'black'
    } ,

}
function ThemeContext({children} : {children : ReactNode} ) {
   const [isDark, setIsDark] = useState(false)
   const theme = isDark ? themes.dark  : themes.white;
   const togglemeet = () => setIsDark((prev) => !prev)
   
   const val = {
    theme,
    isDark,
    togglemeet
   }
    
    return (
    <themeContext.Provider value={val} >{children}</themeContext.Provider>
  )
}


export function useContextValue() {

 const val = useContext(themeContext)

 return val


}

export default ThemeContext