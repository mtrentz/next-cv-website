import React from 'react'

const TechColoring = (text: string, color: string) => {
    return (
        <span className="font-semibold" style={{ color: color }}>
            {text}
        </span>
    )
}


export const TechColored = {
    python: TechColoring("Python", "#F9C222"),
    javascript: TechColoring("JavaScript", "#F9C222"),
    typescript: TechColoring("TypeScript", "#2f74c0"),
    golang: TechColoring("Golang", "#00ACD7"),
    react: TechColoring("React", "#00D1F7"),
    django: TechColoring("Django", "#156646"),
    pytorch: TechColoring("PyTorch", "#EE4C2C"),
    pandas: TechColoring("Pandas", "#E70488"),
    matplotlib: TechColoring("Matplotlib", "#11557C"),
    nextjs: TechColoring("Next.js", "#111111"),
    tailwind: TechColoring("TailwindCSS", "#06B6D4"),
    docker: TechColoring("Docker", "#2496ED"),
    easyocr: TechColoring("EasyOCR", "#EE4C2C"),
    fastapi: TechColoring("FastAPI", "#059083"),
}