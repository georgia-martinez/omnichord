export const colors = {
    white: "#ffffff",
    black: "#000000",
    gray100: "#f5f5f5",
    gray400: "#a0a5a3",
    gray500: "#808080",
    red100: "#9c100f",
    red200: "#8c0e0d",
    background: "#c8ced1",
    beige100: "#dbbf81",
    beige200: "#d1b373",
} as const;

export type ColorName = keyof typeof colors;

