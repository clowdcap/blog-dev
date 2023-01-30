import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Contato from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'
import PostPage from './pages/post/PostPage'
import Login from './pages/admin/login/Login'
import Register from './pages/admin/register/Register'
import CreatePost from './pages/post/manager/CreatePost'

import { Route, Routes } from 'react-router-dom'

import './styles/App.scss'

function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route index element={<Home />} />
          
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path='/blog' element={<Blog />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/read/:id" element={<PostPage />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
