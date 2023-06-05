import { useContext } from "react";
import { LangContext } from "./Context";

function useLang() {
 const lang = useContext(LangContext)
 
 return lang
}

export default useLang