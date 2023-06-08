import Home from '../pages/Home'
import About from '../pages/About'
import Post from '../pages/Post'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'

const publicRoutes = [
	{id: 0, path: '/', component: Home},
	{id: 1, path: '/about', component: About},
	{id: 2, path: '/post', component: Post},
	{id: 3, path: '/contact', component: Contact},
	{id: 4, path: '*', component: PageNotFound},
]

export default publicRoutes