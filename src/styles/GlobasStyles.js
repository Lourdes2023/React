import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
 :root {
  --color-back-body: #f1f1f1;
  --color-back-seccion: #998c8c;
  --color-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  --color-main: #8c925e;
  --color-secondary: #5c413f;
  --color-accent: #654358;
  --color-buttonEm-bg: linear-gradient(to bottom, #6b8c68, #73b266);
  --color-buttonEm-bg-hover: linear-gradient(to bottom, #73b266, #6b8c68);
  --color-text-light: white;
  --color-text-dark: #505854;
  --color-button-text: #ffffff;
  --color-button-hover: #c1bdb9;
}

/* Estilos generales */
body {
  font-family: "Fira Sans", sans-serif;
  margin: 0;
  padding: 0;
  background: var(--color-back-body);
  overflow-x: hidden;
  
}
html {
  scroll-behavior: smooth;
}

a {
    text-decoration: none;
    color:white ;
}
a:visited {
    color: white;
}
li {
    list-style: none;
}
`;
