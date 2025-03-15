import React from 'react'

const App = () => {
  const [jokes, setJokes] = useState([])
  return (
    <div>

      <h1>jokes generator </h1>

      <p>Jokes : {jokes.length}</p>
         {
   jokes.map((jokes.index) => {
      
        <div className="" key={jokes.id}>
          <h2>{jokes.title}</h2>
          <p>{jokes.content}</p>
        </div>


         }
      


    </div>
  )
}

export default App
