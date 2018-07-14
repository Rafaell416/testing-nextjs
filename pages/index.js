import Layout from '../Components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const PostLink = ({ name, id }) => (
  <div>
  <li>
    <Link as={`/post/${id}`} href={`/post?id=${id}`}>
      <a>{name}</a>
    </Link>
  </li>
  <style jsx>{
    `
    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      text-decoration: none;
      color: blue;
      font-family: "Arial";
    }

    a:hover {
      opacity: 0.6;
    }
    `
  }</style>
  </div>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} id={show.id} name={show.name}/>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

    `}</style>
  </Layout>
)


Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index



/**/
