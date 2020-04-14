import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  scaleRatio: 2.0,
  blockMarginBottom: 0.5,
  headerFontFamily: [
    'Inter',
    "sans-serif",
  ],
  bodyFontFamily: ["Inter", "sans-serif"],
  googleFonts: [
    {
      name: 'Inter',
      styles: [
        '400',
        '700'
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
