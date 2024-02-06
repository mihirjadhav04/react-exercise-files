import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Subscribe from './components/Subscribe'

export default function App() {

  let myobject = {
    username: "Mihir",
    age: 21
  }

  let myarray = [ 1, 2, 3]
    return (
      <>
        {/* <h1 className="mb-4">Tailwind CSS!</h1> */}
        {/* <Card channel="Mihir Jadhav" cardData={myobject} cardExtraData={myarray} /> */}
        <Card username="Mihir Jadhav" btnText="Click Me" />
        <Card username="Mihir Jadhav" />

        {/* <Subscribe /> */}
      </>
    )
  }


