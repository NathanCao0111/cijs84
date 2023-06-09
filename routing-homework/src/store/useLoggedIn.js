import { useContext } from "react";
import LoggedInContext from './Context'

function useLoggedIn() {
	const context = useContext(LoggedInContext)

	return context
}

export default useLoggedIn