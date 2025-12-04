import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Calculate from './pages/Calculate/Calculate.tsx';
import './app.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
