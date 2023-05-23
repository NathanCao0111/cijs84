import './App.css';
import { Button } from 'reactstrap'
import BackgroundImage from './utils/BackgroundImage'
import CardList from './components/CardList'

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header className='header'>
          <h4 className='header__heading'>Daily Trello</h4>
          <Button color='light'>Change background</Button>
      </header>
      <CardList />
    </div>
  );
}

export default App;
