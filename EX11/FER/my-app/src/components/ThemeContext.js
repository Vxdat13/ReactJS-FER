import React, { useEffect, useState } from "react"
import './Navigation.css'
import './Player.css'

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false) 

    const theme = dark ? themes.dark : themes.light

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
