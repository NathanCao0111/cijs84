import { useContext } from "react";
import { HeaderContext } from "./Context";

function useHeader() {
	const context = useContext(HeaderContext)

	return context
}

export default useHeader