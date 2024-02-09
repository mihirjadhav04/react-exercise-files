import { createContext, useContext } from "react";



export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {},

    }
)


export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}

// this method reduce our 2 imports in different files to just 1 and everything is done in just one file.
// now when we wat to access the data of ThemeContext we can directly call useTheme and get access to it.