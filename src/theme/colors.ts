export const colors = {
    white: "#ffffff",
    black: "#000000",
    gray100: "#f5f5f5",
    gray400: "#a0a5a3",
    red: "#9c100f",
    background: "#c8ced1",
    beige: "#dbbf81",
} as const;

export type ColorName = keyof typeof colors;

