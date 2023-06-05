import useLang from "../store/useLang"

function Footer() {
 const langContext = useLang()
 const [lang, setLang] = langContext.lang

 return (
  <div className="footer">
   <select value={lang} onChange={e => setLang(e.target.value)}>
    <option value='vi'>vi</option>
    <option value='en'>en</option>
   </select>
  </div>
 )
}

export default Footer