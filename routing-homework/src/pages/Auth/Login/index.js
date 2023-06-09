import useLoggedIn from "../../../store/useLoggedIn"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
	const loggedInContext = useLoggedIn()
	const [, setLoggedIn] = loggedInContext
	const navigate = useNavigate()
	const [emailInput, setEmailInput] = useState('')
	const [pwInput, setPwInput] = useState('')
	const [warning, setWarning] = useState(false)

	const handleLogin = (e) => {
		e.preventDefault()
		if (emailInput !== '' && pwInput !== '') {
			setLoggedIn(true)
			navigate('/')
		}
		else {
			setWarning(true)
		}
	}

	return (
	<>
	<h2>Login</h2>
	<form 
	style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
	>
		<input 
		type='email'
		placeholder="Enter email ..."
		value={emailInput}
		onChange={e => setEmailInput(e.target.value)}
		style={{ display: 'block' }}
		/>
		<input 
		type='password'
		placeholder="Enter password ..."
		value={pwInput}
		onChange={e => setPwInput(e.target.value)}
		style={{ display: 'block' }}
		/>
		{warning && <p style={{ color: 'red' }}>Please fill in the form</p>}
		<button style={{ display: 'block' }} onClick={handleLogin}>Login</button>
	</form>
	</>
	)
}

export default Login