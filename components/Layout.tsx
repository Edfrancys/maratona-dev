import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
    children?: ReactNode
    title?: string
}

// Header Css =========================================

const Header = styled.header`
  background: rgb(8, 70, 51);
  padding: 2rem 0 10rem;
  text-align: center;
`
const Title = styled.h1`
    color: ${props => props.theme.colors.white};   
    font-size: 2rem; 
    font-weight: 100;    
`

const FooterTitle = styled.h2`
    color: ${props => props.theme.colors.primary};   
    font-size: 1rem; 
    font-weight: 500;    
    margin: 2rem 0 2rem 0;
    text-align: center;
`

const Laytout = ({ children, title = 'Maratona - Finance.Note' }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header>
                <Title> Finance.Note </Title>
            </Header>

            <main>
                {children}
            </main>

            <footer>
                <FooterTitle>@Finance.Note</FooterTitle>
            </footer>
        </>
    )
}

export default Laytout