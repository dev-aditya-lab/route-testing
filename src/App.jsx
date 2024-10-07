
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

  return (
    <Router>
    <h1>navbar</h1>
    <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </Router>
  )
}

export default App
