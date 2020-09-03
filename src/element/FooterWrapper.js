import styled from 'styled-components'

export const FooterWrap = styled.div`
    grid-column : 2/ span 12;
    grid-row:2 /3 ;
    border:2px solid yellow;
    display:grid;
    grid-template-columns: 1fr repeat(16, minmax(auto, 2rem)) 1fr;

`
export const FooterContainer = styled.div`
grid-column : 2/ span 16 ;
grid-row:2 /3 ;
border:2px solid blue;
display: flex;
align-items:center;
justify-content:center;
`