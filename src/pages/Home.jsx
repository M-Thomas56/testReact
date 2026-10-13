import { Link } from 'react-router'

function Home() {
  return (
      <>
      <h1>Bienvenue sur le site React de Marc Thomas</h1>
      <div>
        <Link to="/about">À propos</Link>
        <br />
        <button>coucou</button>
      </div>
      </>
    )
}

export default Home