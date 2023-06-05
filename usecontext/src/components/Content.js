import { Button, Input } from 'reactstrap'
import { useState } from 'react'
import useLogin from '../store/useLogin'
import useLang from '../store/useLang'

function Content() {
  const loginContext = useLogin()
  const langContext = useLang()
  const [isLogin, setIsLogin] = loginContext.isLogin
  const [username, setUsername] = loginContext.username
  const [isWarning, setIsWarning] = useState(false)
  const [lang, ] = langContext.lang

  const handleLoginBtn = () => {
    if (username !== '') {
      setIsLogin(true)
      setIsWarning(false)
    }
    else {
      setIsWarning(true)
    }
  }
 
  return (
    <main className='content__wrapper'>
    {isLogin === false ? 
    (<div className='content__container'>
      <div className='content__header'>
        {lang === 'vi' ? 'ĐĂNG NHẬP' : 'LOGIN'}
      </div>
      <div className='content__form'>
      <Input 
      placeholder={lang === 'vi' ? 'Tên đăng nhập ...' : 'Username ...'}
      className='content__input'
      value={username}
      onChange={e => setUsername(e.target.value)}
      />
      {isWarning && <p className='content__warning'>{lang === 'vi' ? 'Vui lòng điền tên đăng nhập' : 'Please fill in username'}</p>}
      <Button color='primary' className='content__btn' onClick={handleLoginBtn}>{lang === 'vi' ? 'ĐĂNG NHẬP' : 'LOGIN'}</Button>
      </div>
    </div>) 
    : <h3>{lang === 'vi' ? `Chào mừng ${username}` : `Welcome ${username}`}</h3>}
    </main>
  )
}

export default Content