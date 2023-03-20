import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #85BE38;
    --text-color: #5F6369;
    --black: #000000;
    --white: #ffffff;
    --gray: #F5F5F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:active {
      color: inherit;
    }
  }

  ul {
    list-style: none;
  }
  
  button {
    border: none;
    cursor: pointer;
    background-color: inherit;
  }

  .container {
    margin: 0 auto;
  }

  @media screen and (max-width: 374px) {
    .container {
      max-width: 288px;
    }
  }
  
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .container {
      max-width: 337px;
    }
  }
  
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .container {
      max-width: 720px;
    }
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    .container {
      max-width: 960px;
    }
  }
  
  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    .container {
      max-width: 1140px;
    }
  }
  
  @media screen and (min-width: 1920px) {
    .container {
      max-width: 1320px;
    }
  }
`