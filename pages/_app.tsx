import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AuthProvider }  from '../utils/context/AuthContext';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;0,800;0,900;1,200;1,400;1,600;1,800;1,900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 93.75%;
    }

    body {
        background: #f0f2f5;
        font-family: 'Montserrat', sans-serif;
    }
     
    span {
        font-weight: 400;
    }

    .container{
        width: min(80vw, 800px);
        margin: auto;
    }

    table th {        
        padding: 1rem 2rem;
        text-align: left;
    }

    table td {        
        padding: 1rem 2rem;
        text-align: left;
    }

    table thead tr th:first-child,
    table tbody tr td:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
    }    
    table thead tr th:last-child,
    table tbody tr td:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
    }  

    table tr { opacity: 0.8 }
    table tr:hover { opacity: 1 }

    .sr-only{
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border-width: 0;

    }

    a:hover{
        opacity: 0.4;
    }

    @media (min-width: 800px) {
        html {
            font-size: 87.5%;
        }
        #balance {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }
    }

    .modal-active {
        opacity: 1 !important;
        visibility: visible !important;
    }

    .btn {        
        padding: .5rem .5rem;
        border: .2rem solid;
        text-align: center;
        font-size: 1.3rem;
        border-radius: .7rem;
        cursor: pointer;
    }

    button.btn.adicionar:hover{
        background: green;
        color: white;
    }

`

const theme = {
    colors: {
        primary: '#00c7a6',
        darkBlue: '#363f5f',
        white: '#fff'
    },
    background: {
        white: '#fff',
        green: '#00c7a6'
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AuthProvider>
        </>
    )
}

export default MyApp