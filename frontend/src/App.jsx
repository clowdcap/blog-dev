import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import Home from './pages/home/Home'

import Contato from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'

import { Route, Routes } from 'react-router-dom'

import './styles/App.scss'
import PostPage from './pages/post/PostPage'



function App() {
  return (
    <div className="App">
      <Header />

        
          <Routes>
            <Route index element={<Home />} />
            
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />

            <Route path="/posts/read/:id" element={<PostPage />} />

            <Route path="*" element={<Home />} />
          </Routes>


      <Footer />
    </div>
  )
}

export default App
