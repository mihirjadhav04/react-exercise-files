
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-orange-400 text-white text-3xl'> ContextAPI - ReactApp</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
