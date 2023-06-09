import LoggedInContext from './Context'
import { useState } from 'react'

function Provider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false)

	return (
		<LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
			{children}
		</LoggedInContext.Provider>
	)
}

export default Provider