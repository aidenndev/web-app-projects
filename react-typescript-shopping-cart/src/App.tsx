import { Container } from 'react-bootstrap'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </>
  )
}

export default App