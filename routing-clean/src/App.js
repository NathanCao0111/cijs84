import './App.css';
import './themes/startbootstrap-clean-blog-gh-pages/css/styles.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';
import publicRoutes from './routes'

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          {
            publicRoutes.map((element) => {
              const Page = element.component
              return <Route 
              key={element.id} 
              path={element.path} 
              element={
              <>
              <Header index={element.id}/> 
              <Page />
              </>
            } />
            })
          }
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
