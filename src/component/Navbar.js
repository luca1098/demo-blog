import React from 'react'
import { NavWrap, UlWrapper, LiMenu, Logo } from '../element'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { UseNav } from '../hooks/useNav'
//import image from '../images/download.png'

export const Navbar = () =>{
    const data = useStaticQuery(graphql`
        query{
            logo: file(relativePath:{ eq: "download.png"}){
                publicURL
            }
        }
    `)

    return(
        <NavWrap>
           <Link to='/'>
               <Logo src={data.logo.publicURL} alt='logo l2mdesign png' />
            </Link> 
           <UlMenu />
        </NavWrap>
    )
}

const UlMenu = () => {
const dataMenu = UseNav()
console.log(dataMenu)
   return(
        <UlWrapper>
             {dataMenu.map((node, i) =>(
                    <LiMenu key={i}>
                        <Link to={node.node.name}>{node.node.name}</Link>
                    </LiMenu>
                 )
              )}
        </UlWrapper>
   )
}

