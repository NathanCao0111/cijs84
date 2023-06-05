import useLogin from '../store/useLogin'
import useLang from '../store/useLang'

function Header() {
 const loginContext = useLogin()
 const langContext = useLang()
 const [isLogin, ] = loginContext.isLogin
 const [username, ] = loginContext.username
 const [lang, ] = langContext.lang

 return (
  <header className='header'>
   {lang === 'vi' ? 
   (<>
   <div className='header__logo'>MindX</div>
   {!isLogin && <button className='header__login'>Đăng nhập</button>}
   {isLogin && <p className='header__login--active'>Chào mừng, {username}</p>}
   </>) 
   : (<>
   <div className='header__logo'>MindX</div>
   {!isLogin && <button className='header__login'>Login</button>}
   {isLogin && <p className='header__login--active'>Welcome, {username}</p>}
   </>)}
  </header>
 )
}

export default Header