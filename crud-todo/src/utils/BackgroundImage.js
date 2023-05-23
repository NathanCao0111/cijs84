import axios from 'axios'
import { useState, useEffect } from 'react'

function BackgroundImage() {
	const [image, setImage] = useState()

	// const num = Math.floor(Math.random() * 20 + 1)
	const imageUrl = `https://api.unsplash.com/search/photos?page=1&query=Landscape&client_id=HukBMyn30E4dkaRkxTKBm54ZAdA_ZNYtcoZWtKIsR-k`

	useEffect(() => {
		axios
		.get(`${imageUrl}`)
		.then(response => {
			setImage(response.data.results[0].urls.full)
		})
	}, [imageUrl])

	return (
		<div className='background' style={{ 
			backgroundImage: `url(${image})`
			}}>
		</div>
	)
}

export default BackgroundImage