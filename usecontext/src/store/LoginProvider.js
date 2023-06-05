import { LoginContext } from "./Context";
import { useState } from "react";

function LoginProvider({ children }) {
 const [isLogin, setIsLogin] = useState(false)
 const [username, setUsername] = useState('')

 const value = {
  isLogin: [isLogin, setIsLogin],
  username: [username, setUsername]
 }

 return (
  <LoginContext.Provider value={value}>
   {children}
  </LoginContext.Provider>
 )
}

export default LoginProvider