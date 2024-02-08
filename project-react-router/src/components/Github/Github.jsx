import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [ data, setData ] = useState(0)

    // useEffect(() => {
    //     fetch('https://api.github.com/users/mihirjadhav04')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h1>Github Followers : {data.followers} </h1>
        <img src={data.avatar_url} alt="github_profile" />
    </div>

  )
}

export default Github


export const githubDataLoader = async () => {
    const response = await fetch("https://api.github.com/users/mihirjadhav04")
    return response.json()
}