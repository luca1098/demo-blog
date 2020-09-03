import React from 'react';
 import { createGlobalStyle ,ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    body{
        font-family:${props => props.theme.fonts.body};
        color:${props => props.theme.color.testo};
    }
    h1,h2,h3,h4,h5,h6{
        font-family:${props => props.theme.fonts.title};
        color:${props => props.theme.color.title};
    }
    a {
        color:${props => props.theme.color.testo};
        text-decoration:none;
        font-weight:700
    }
   
`
export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
)