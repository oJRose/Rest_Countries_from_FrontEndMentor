import { Home } from './pages/Home'
import { CountryPage } from './pages/CountryPage'
import { NavBar } from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country' element={<CountryPage /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
