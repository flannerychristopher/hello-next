import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const ShowLink = ({ show }) => {
  return(
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
  )
}

const Index = (props) => (
  <Layout>
    <h1>Ninja Turtles TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <ShowLink show={show} />
        </li>
      ))}
    </ul>
    <style jsx global>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: green;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=ninja+turtles')
  const data = await res.json()

  console.log(`show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
