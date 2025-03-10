import { useEffect, useState } from 'react'

const Card = ({ title }) => {
  const [count, setCounts] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} liked: ${hasLiked}`);
    },[hasLiked]);

  return (
    <div className='card' onClick={() => setCounts(count + 1)}> 
      <h2>{ title } <br/> { count }</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
        </button>
    </div>
  )
}

const App = () => {

  return (
    <div className="card-container">
    <Card title="Star Wars" rating={5} isCool={true}/>
    <Card title="Avatar"/>
    <Card title="The Lion King"/>
    </div>
  )
}

export default App

