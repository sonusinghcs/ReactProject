import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
        value={username}
        onChange={(e) => setusername(e.target.value)}
        type="text" placeholder="username"/>
        <input 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="password" placeholder="password"/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login