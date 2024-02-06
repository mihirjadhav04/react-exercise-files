import { useState, useCallback } from 'react'
import './App.css'

function App() {

  // Variables 
  const [ passwordLength, setPasswordLength ] = useState(8)
  const [ numbersAllowed, setNumbersAllowed ] = useState(false)
  const [ charactersAllowed, setCharactesAllowed ] = useState(false)
  const [ password, setPassword ] = useState('')

  
  const generatePassword = useCallback(() => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let additionalCharacters = '';
    if (numbersAllowed) additionalCharacters += '0123456789';
    if (charactersAllowed) additionalCharacters += '!@#$%^&*()-_=+';

    let newPassword = '';
    const combinedCharset = charset + additionalCharacters;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * combinedCharset.length);
      newPassword += combinedCharset[randomIndex];
    }
    setPassword(newPassword);
  }, [passwordLength, numbersAllowed, charactersAllowed]);


  return (
    <>
      
    </>
  )
}

export default App
