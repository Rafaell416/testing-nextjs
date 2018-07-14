import { withRouter } from 'next/router'
import Layout from '../Components/Layout'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'


const Post = (props) => (
  <Layout>
     <h1>{props.show.name}</h1>
     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
     <img src={props.show.image.medium}/>
     <style jsx>{`
       h1, p{
         font-family: "Arial";
       }
     `}</style>
  </Layout>
)

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post

/*
<div className="markdown">
  <Markdown source={
    `
       This is our blog post.
       Yes. We can have a [link](/link).
       And we can have a title as well.

       # This is a title

       And here's the content.
    `
  }/>
</div>
*/
