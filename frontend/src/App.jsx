import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import Home from './pages/home/Home'
import Post from './pages/post/Post'
import Contato from './pages/contato/Contato'

import { Route, Routes } from 'react-router-dom'

import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <Header />

        
          <Routes>
            <Route index element={<Home />} />
            <Route path="contato" element={<Contato />} />


            <Route path="/posts/read/:id" element={<Post />} />
          </Routes>


      <Footer />
    </div>
  )
}

export default App
