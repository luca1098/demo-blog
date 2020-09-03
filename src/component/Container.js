import React from 'react'
import { ContainerWrap } from '../element'
import { Navbar, Footer } from '../component'

export const Container = ({children}) => {
    return (
        <ContainerWrap>
            <Navbar />
            {children}
            <Footer />
        </ContainerWrap>
    )
}