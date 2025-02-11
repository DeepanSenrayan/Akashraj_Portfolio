import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
