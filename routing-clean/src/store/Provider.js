import { useState } from 'react'
import { HeaderContext } from './Context'
import homeBg from '../themes/startbootstrap-clean-blog-gh-pages/assets/img/home-bg.jpg'
import aboutBg from '../themes/startbootstrap-clean-blog-gh-pages/assets/img/about-bg.jpg'
import postBg from '../themes/startbootstrap-clean-blog-gh-pages/assets/img/post-bg.jpg'
import contactBg from '../themes/startbootstrap-clean-blog-gh-pages/assets/img/contact-bg.jpg'

function Provider({ children }) {
	const initState = [
		{
			id: 1,
			name: 'site',
			backgroundImg: homeBg,
			heading: 'Clean Blog',
			subheading: 'A Blog Theme by Start Bootstrap'
		},
		{
			id: 2,
			name: 'page',
			backgroundImg: aboutBg,
			heading: 'About Me',
			subheading: 'This is what I do.'
		},
		{
			id: 3,
			name: 'post',
			backgroundImg: postBg,
			heading: 'Man must explore, and this is exploration at its greatest',
			subheading: 'Problems look mighty small from 150 miles up',
			meta: 'Posted by Start Bootstrap on August 24, 2022'
		},
		{
			id: 4,
			name: 'page',
			backgroundImg: contactBg,
			heading: 'Contact Me',
			subheading: 'Have questions? I have answers.'
		},
		{
			id: 5,
			name: 'site',
			backgroundImg: homeBg,
			heading: 'Clean Blog',
			subheading: 'A Blog Theme by Start Bootstrap'
		},
	]

	const [headerData, setHeaderData] = useState(initState)

	return	(
		<HeaderContext.Provider value={[headerData, setHeaderData]}>
			{children}
		</HeaderContext.Provider>
	)
}

export default Provider