import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../screens/Home'

const RoutesComidaEmCasa = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
  )
}
export default RoutesComidaEmCasa