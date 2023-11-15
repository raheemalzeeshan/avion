# Avion

## Styling Guide

### Font Family use 

    -Base font family : Lato
    -Secondary font family: Roboto slap
    
### CSS reset

```css
/* CSS reset */
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select, span {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6, span {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }

  ```

** CSS reset refrence [CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/). **



