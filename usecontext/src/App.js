import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import LangProvider from './store/LangProvider';
import LoginProvider from './store/LoginProvider';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <LoginProvider>
          <Header />
          <Content />
        </LoginProvider>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
