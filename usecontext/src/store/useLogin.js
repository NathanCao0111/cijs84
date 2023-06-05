import { useContext } from "react";
import { LoginContext } from "./Context";

function useLogin() {
 const loginContext = useContext(LoginContext)

 return loginContext
}

export default useLogin