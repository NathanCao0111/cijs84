import CardItem from './CardItem'

function CardList() {
	return (
		<div className='card-list__container'>
			<CardItem 
			title="Todo"
			initCard={['Learning ReactJS', 'Learning ES6', 'Playing Games']}
			cardDesc="+ Add a Card"
			/>
			<CardItem 
			title="Doing"
			initCard={[]}
			cardDesc="+ Add a Card"
			/>
			<CardItem 
			title=""
			initCard={[]}
			cardDesc="+ Add a List"
			/>
		</div>
	)
}

export default CardList