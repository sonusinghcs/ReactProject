import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
  if (!user) return

  return <div>username: {user.username} password:{user.password}</div>
}

export default Profile