import styled from 'styled-components'

export const NavWrap = styled.div`
grid-column: 2 /span 12;
grid-row: 1/2;
border:1px solid green;
display:flex;
justify-content:space-between;
align-items:center;
width:100%
`

export const UlWrapper = styled.ul`
display:flex;
align-items:center;
justify-content:center; 
`
export const LiMenu = styled.li`
    list-style:none;
    padding:.7rem 1rem;

`

export const Logo = styled.img`
    width:40px;
`