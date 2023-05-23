import { Card, Button } from 'reactstrap'
import { useState } from "react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEllipsis)

function CardItem({ title, initCard, cardDesc }) {
	const [cardList, setCardList] = useState(initCard)
	const [card, setCard] = useState()
	const [cardInput, setCardInput] = useState(false)

	const handleAddBtn = () => {
		setCardList(prev => [...prev, card])
		setCardInput(false)
		setCard('')
	}

	return (
	<Card className='card-list' color='light'>
		<header className='card-list__header'>
			<h5>{title}</h5>
			<FontAwesomeIcon icon={faEllipsis} />
		</header>
		<ul className='card-item__container'>
		{
			cardList.map((element, index) => {
				return <li className='card-item' key={index}>{element}</li>
			})
		}
		</ul>
			{!cardInput && <button className='card-btn' onClick={() => setCardInput(true)}>{cardDesc}</button>}
			{cardInput && 
			<div className='card-input__container'>
			<input 
			type="text"
			placeholder='Enter a todo...'
			value={card}
			onChange={e => setCard(e.target.value)}
			className='card-input'
			/>
			<Button color='primary' onClick={handleAddBtn}>Add</Button>
			<Button color='light' onClick={() => setCardInput(false)}>Back</Button>
			</div>}
	</Card>
	)
}

export default CardItem