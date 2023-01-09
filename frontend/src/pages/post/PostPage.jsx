import React, { useState, useEffect } from 'react'
import Autor from '../../components/assinatura/Autor'
import Share from '../../components/compartilhar/ShareRes'
import Postagem from '../../components/postagem/Postagem'

import { useLocation  } from 'react-router-dom'

import './postpage.scss'

import axios from 'axios'

const PostPage = () => {
  const pack = useLocation()
  const path = pack.pathname.split('/')
  const id = path[3]

  const [post, setPost] = useState([])
  console.log()

    const fetchPost = async ()=> {
        const res = await axios.get('http://localhost:5000/posts/read/'+id)
        console.log('Posts: ', res.data)
        setPost(res.data)
    }

    useEffect(()=> {
        try {
          fetchPost()
        } catch (error) {
          console.log(error)
        }
    }, [])

  return (
    <section className="post__page">
      <div className="container__post center">
        <div className="titulos__post">
          <h1>{post.titulo}</h1>
          <p>{post.descricao}</p>
        </div>

        <div className="img__capa__post">
          <img src={post.capa} alt="Foto da Capa" />
        </div>

        <div className="conteudo__post">
          <div className="legenda__topo__post">
            <Autor />
            <Share />
          </div>
          <div className="corpo__post">
            <Postagem />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostPage