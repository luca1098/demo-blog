import styled from 'styled-components'

export const ContainerWrap = styled.div`
    display:grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.6rem)) 1fr;
    grid-template-rows: 6rem 20rem 9rem auto;
    gap: 0 2rem;
    

    @media ${props => props.theme.breakpoint.tablet} {
        grid-tempate-column: 2rem repeat(6,1fr) 2rem
    };
    @media ${props => props.theme.breakpoint.mobile} {
        grid-tempate-column: 1rem repeat(6,1fr) 1rem
    }

`