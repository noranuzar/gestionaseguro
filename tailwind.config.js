/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        /* ===== PALETA TIERRA — Gestionaseguro.com ===== */

        /* Oliva — Seguridad, Crecimiento, Confianza */
        oliva: {
          50:  '#f4f6ee',
          100: '#e6ead8',
          200: '#cdd5b1',
          300: '#a8b87d',
          400: '#7d9448',
          500: '#556B2F',  /* ← Principal */
          600: '#465824',
          700: '#37441c',
          800: '#2a3416',
          900: '#1e2510',
        },

        /* Arena — Base Sólida, Calma, Legibilidad */
        arena: {
          50:  '#fefefb',
          100: '#fcfcf5',
          200: '#F5F5DC',  /* ← Principal */
          300: '#eae5be',
          400: '#d9cf95',
          500: '#c4b56d',
          600: '#a89650',
          700: '#857540',
          800: '#635633',
          900: '#443b24',
        },

        /* Terracota — Calidez, Humanidad, Acción */
        terracota: {
          50:  '#fdf3f0',
          100: '#fbe4de',
          200: '#f5c4b8',
          300: '#ee9e8b',
          400: '#E2725B',  /* ← Principal */
          500: '#cc5a42',
          600: '#ad4534',
          700: '#883628',
          800: '#66291e',
          900: '#491d15',
        },
      },

      fontFamily: {
        /* Tipografía principal: legible, profesional, humana */
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        /* Tipografía para títulos destacados */
        display: ['Outfit', 'Inter', 'sans-serif'],
      },

      fontSize: {
        /* Escala tipográfica para la metáfora "Escalera" */
        'step-sm':   ['0.875rem', { lineHeight: '1.5' }],
        'step-base':  ['1rem',     { lineHeight: '1.6' }],
        'step-lg':   ['1.25rem',  { lineHeight: '1.5' }],
        'step-xl':   ['1.5rem',   { lineHeight: '1.3' }],
        'step-2xl':  ['2rem',     { lineHeight: '1.2' }],
        'step-3xl':  ['2.5rem',   { lineHeight: '1.1' }],
      },

      borderRadius: {
        'faro': '0.75rem',  /* Bordes suaves — estética Faro */
      },

      boxShadow: {
        'faro': '0 4px 20px rgba(85, 107, 47, 0.12)',
        'elevada': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },

      spacing: {
        'seccion': '5rem',  /* Separación entre secciones */
      },
    },
  },
  plugins: [],
}
