import { Routes, Route,Link } from 'react-router-dom'
import Home from './Home'
import './App.css'
import CreatePost from './CreatePost'
import Login from './Login'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

function App() {
const [isAuth, setIsAuth]=useState(localStorage.getItem('isAuth'))

const signUserOut = ()=>{
signOut(auth).then(()=>{
  localStorage.clear()
 setIsAuth(false)
 window.location.pathname = './login'
})
}

	return (
		<>
			<nav>
				<Link to="/"> Home </Link>
				
				{!isAuth ? <Link to="/login"> Login </Link> : <>
          <Link to="/create"> Create Post</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
        }
			</nav>
			<Routes>
				<Route exact path="/" element={<Home isAuth={isAuth} />} />
				<Route exact path="/create" element={<CreatePost isAuth={isAuth} />} />
				<Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
			</Routes>
		</>
	)
}

export default App
