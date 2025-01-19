import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateClient } from 'aws-amplify/data';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';
import Track from './rollerTrack/track';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(config)
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
const client = generateClient();


function App() {
  const [data, setData] = useState("[Nothing here yet...]")
  const [fileUploaded, setFileUploaded] = useState(false);
  
  const fetchRoller = async () => {
    const requestBody = { input: "Hello world!" };

    try {
      const response = await fetch('https://4uu5msanif3aqdh7m752tdxzku0nmcsf.lambda-url.us-west-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const output = await response.json();
      setData(output.message); 
    } catch (error) {
      console.error('Error calling Lambda:', error);
    }
  };


  return (
    <>
      <div>
       <img src={viteLogo} className="logo" alt="Vite logo" />
       <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Rolling Thunder</h1>
      <h3> Electric Boogaloo </h3>
      
    <FileUploader
      acceptedFileTypes={['audio/*']}
      path={({ identityId }) => 'media/${identityId}/'}
      maxFileCount={1}
      isResumable
      onUploadSuccess={() => setFileUploaded(true)}
      displayText={{
        dropFilesText: 'Drop your thunders to roll or',
        browseFilesText: 'Browser',
        getFilesUploadedText(count) {
          return `${count} thunder uploaded`;
        },
      }}
      />
      
      <div className="card">
        <button onClick={() => fetchRoller(Math.random())}>
          {data}
        </button>
      </div>

      {fileUploaded ? <Track/> : "Upload a file to start..."}

    </>
  )
}

export default App
