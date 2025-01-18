import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateClient } from 'aws-amplify/data';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';
import { StringConcat } from 'aws-cdk-lib';


Amplify.configure(config)
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
const client = generateClient();


function App() {
  const [data, setData] = useState("[Nothing here yet...]")
  
  const fetchRoller = async (input) => {
    setData(input);  
  };

  return (
    <>
      <div>
       <img src={viteLogo} className="logo" alt="Vite logo" />
       <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Rolling Thunder</h1>
      <h3> Electric Boogaloo </h3>
      <p> {data} </p>
      <div className="card">
        <button onClick={() => fetchRoller(Math.random())}>
          {data}
        </button>
      </div>
    </>
  )
}

export default App
