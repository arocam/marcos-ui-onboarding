import { createGlobalStyle } from 'styled-components'
import { Fonts } from './typography'

export const GlobalStyles = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      /* font-family: 'Montserrat', sans-serif; */
      font-family: "montserrat";
    }
    body{
      background-color: #222222;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    //RESET (In progress)
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    b{
      padding: 0;
      top: 0;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
    }
    input,
    button{
        border: none;
        outline: none;
        background-color: transparent;
    }

    ${Fonts}
`
export default GlobalStyles;