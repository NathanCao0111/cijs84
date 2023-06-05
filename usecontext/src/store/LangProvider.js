import { LangContext } from "./Context";
import { useState } from "react";

function LangProvider({ children }) {
 const [lang, setLang] = useState('vi')
 const value = {
  lang: [lang, setLang]
 }

 return (
  <LangContext.Provider value={value}>
   {children}
  </LangContext.Provider>
 )
}

export default LangProvider