import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
	const navigate = useNavigate()
	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/')
		}, 3000)

		return () => {
			clearTimeout(timer)
		}
	})

 return <h1 style={{ textAlign: 'center', marginBottom: 32 }}>PageNotFound</h1>
}

export default PageNotFound