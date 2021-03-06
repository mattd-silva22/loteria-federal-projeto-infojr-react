import { createGlobalStyle } from 'styled-components'

// Workaroud for https://github.com/styled-components/vscode-styled-components/issues/175
const styled = { createGlobalStyle }

export const GlobalStyles = styled.createGlobalStyle`

  /*  Colors Variables    */

  :root {
    --mega-sena : #6BEFA3;
    --quina: #8666EF;
    --lotofacil: #DD7AC6;
    --lotomania: #FFAB64 ;
    --timemania: #5AAD7D;
    --dia-de-sorte: #BFAF83;

  }
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Default rem size  */

  html {
        font-size: 62.5%;
        background-color: #EFEFEF;
    }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Allow percentage-based heights in the application */
  html,
  body {
    height: 100%;
  }

  /* Add accessible line-height and improve text rendering */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make media tags easier to work with */
  img,
  picture,
  video,
  canvas,
  svg {
    max-width: 100%;
    display: block;
  }

  /* 8. Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Create a root stacking context */
  #root,
  #__next {
    isolation: isolate;
  }
`
