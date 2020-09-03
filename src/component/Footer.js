import React from 'react';
import { FooterWrap, FooterContainer } from '../element'
import { useStaticQuery, graphql } from 'gatsby'
// import facebook from '../images/facebook.svg'
// import linkedin from '../images/linkedin.svg'
// import twitter from '../images/twitter.svg'
// import instagram from '../images/instagram.svg'

export const Footer = () =>{
    const data = useStaticQuery(
        graphql`
            query{
                facebook: file(relativePath : {eq : "facebook.svg"}){
                    publicURL
                }
                instagram: file(relativePath : {eq : "instagram.svg"}){
                    publicURL
                }
                twitter: file(relativePath : {eq : "twitter.svg"}){
                    publicURL
                }
                linkedin: file(relativePath : {eq : "linkedin.svg"}){
                    publicURL
                }
            }
        `
    )
    return(
        <FooterWrap>
           <FooterContainer>
                
                    <a href='https://facebook.com' target='_blank' rel="noreferrer">
                        <img src={data.facebook.publicURL} alt='' style={{height:'30px'}}/>
                    </a>
                    <a href='https://facebook.com' target='_blank' rel="noreferrer">
                        <img src={data.twitter.publicURL} alt='' style={{height:'30px'}}/>
                    </a>
                    <a href='https://facebook.com' target='_blank' rel="noreferrer">
                        <img src={data.linkedin.publicURL} alt='' style={{height:'30px'}}/>
                    </a>
                    <a href='https://facebook.com' target='_blank' rel="noreferrer">
                        <img src={data.instagram.publicURL} alt='' style={{height:'30px'}}/>
                    </a>

          
           </FooterContainer>
        </FooterWrap>
    )
}