import useLoggedIn from "../../store/useLoggedIn"
import Products from "./Products"
import Invoices from "./Invoices"
import Cart from "./Cart"
import Profile from "./Profile"
import About from "./About"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
	const loggedInContext = useLoggedIn()
	const [loggedIn, setLoggedIn] = loggedInContext
	const navigate = useNavigate()

	useEffect(() => {
		if (loggedIn === false) {
			const timer = setTimeout(() => {
				navigate('/auth/login')
			}, 500)
			
			return () => {
				clearTimeout(timer)
			}
		}
	}, [loggedIn])

	const handleLogOut = () => {
		setLoggedIn(false)
	}

	return (
	<>
	<h1>Home</h1>
	<Products />
	<Invoices />
	<Cart />
	<Profile />
	<About />
	<button onClick={handleLogOut}>Log out</button>
	</>
	)
}

export default Home