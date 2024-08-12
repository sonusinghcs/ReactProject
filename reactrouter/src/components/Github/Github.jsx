import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const followers = useLoaderData()
    // const [followers, setFollowers] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sonusinghcs')
    //     .then(res => res.json())
    //     .then(data => {console.log(data.followers);setFollowers(data)})

    // },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Follower:{followers.followers}
    <img src={followers.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sonusinghcs')
    const data = await response.json()
    return data
}