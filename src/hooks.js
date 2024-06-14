import { useState } from "react";
// just a hook (a simple function which can manage the state for 'theme' and has a function to 'toggle')
// once provided to parent the return items from this hook, they will be accessible to entire application via 
// the context api and its useContext hook
export const useTheme = () => {
    const [themeId, setThemeId] = useState('light');

    const toggleTheme = () => {
        if(themeId === 'dark'){
            setThemeId('light')
        }else{
            setThemeId('dark')
        }
    }

    return {
        themeId,
        toggleTheme
    }
}