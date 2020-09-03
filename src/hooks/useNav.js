import {useStaticQuery, graphql} from 'gatsby'

export const UseNav = () =>{
    const { Menu } = useStaticQuery(
        graphql`
            query Menu{
                Menu: allNavDataYaml {
                    edges {
                      node {
                        name
                        url
                      }
                    }
                  } 
            }
        `
    )
    
    return Menu.edges
}