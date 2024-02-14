import './App.css'
import config from './config/config';

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(config.appWriteUrl);
  return (
    <>
     <h1>Blog App - Appwrite!</h1>
    </>
  )
}

export default App
