import { createGlobalStyle as gStyle } from 'styled-components'

const GlobalStyles = gStyle`

body {
    font-family:  ${props => props.theme.typography.fontFamily}
}

h1 {
    font-size:  ${props => props.theme.typography.h1.fontSize} 
}

h2 {
    font-size: 32px;
}

h3 {
    font-size: 32px;
    font-size: 24px;
}
`

export default GlobalStyles;