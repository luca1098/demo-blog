// exports.createPages = async function({action, graphql}){
//     const {data} = await`
//      query{
//         allMdx(sort: {fields: frontmatter___data, order: DESC}) {
//             edges {
//               node {
//                 frontmatter {
//                   slug
//                 }
//                 id
//               }
//             }
//           }
//      }
//     `

//     //this is the number of items for page 
//     const postPerPage = 3

//     //this is the number of total pages
//      // la funzione math.ceil serve per rendere intero un numero
//     const TotalPage = Math.ceil(data.allMdx.edges.length / postPerPage)
//     // creare un array lungo quante le pagine sono e per ogni array inserire i dati
//      Array.from({length:TotalPage}).forEach((_, index)=>{
//          action.createPages({
//              path: index === 0 ? `/` : `/${index + 1}`,
//              component: require.resolve("./src/templates/AllPosts.js"),
//              context: {
//                  limit : postPerPage, //limite di post per pagina
//                  skip : index * postPerPage, //significa che in base al numero di post nella pagina successiva ti sckippera i primi post
//                  TotalPage,
//                  currentPage: index + 1,
//              }
//          })
//      })

//      //create single blog post page

//      data.allMdx.edges.forEach(e => {
//          const slug = e.node.frontmatter.slug;
//          const id = e.node.id;
//          action.createPages({
//              path : slug,
//              component : require.resolve("./src/template/PostChild.js"),
//              context : {id}

//          })
//      })
// }