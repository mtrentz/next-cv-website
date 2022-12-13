import { createContext, useState, useEffect } from "react";

type ThemeContextData = {
    theme: string,
    toggleTheme: () => void,
}

const ThemeContext = createContext({} as ThemeContextData);
export default ThemeContext;

type Props = {
    children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {

    let setThemeStorage = (theme: string) => {
        localStorage.setItem('mkt-theme', theme);
    }

    const [theme, setTheme] = useState("dark")

    useEffect(() => {

        let themeStorage = localStorage.getItem('mkt-theme');

        if (themeStorage) {
            if (themeStorage === "dark") {
                setTheme("dark")
            }
            if (themeStorage === "light") {
                setTheme("light")
            }
        }
    }, [])

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
            setThemeStorage('dark');
        } else {
            setTheme('light');
            setThemeStorage('light');
        }
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>;
}