import React, { useState, useEffect } from 'react'
import Autor from '../../components/assinatura/Autor'
import Share from '../../components/compartilhar/ShareRes'
import Postagem from '../../components/postagem/Postagem'

import { Link, useLocation  } from 'react-router-dom'

import './postpage.scss'

import Avatar from './../../assets/pic-1.png'

import axios from 'axios'
import ShareComp from '../../components/compartilhar/ShareComp'
import Assinatura from '../../components/assinatura/Assinatura'
import News from '../../components/news/News'
import ArtigosSimple from '../../components/artigos/ArtigosSimple'

const PostPage = () => {
  const pack = useLocation()
  const path = pack.pathname.split('/')
  const id = path[3]
  
  const [post, setPost] = useState([])
  
  const fetchPost = async ()=> {
    const res = await axios.get('http://localhost:5000/posts/read/'+id)
    setPost(res.data)
  }

  useEffect(()=> {
    try {
      fetchPost()
    } catch (error) {
      console.log(error)
    }
  }, [post])

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

        <div className="hr">
          <hr />
        </div>

        <div className="conteudo__post">
          <div className="legenda__topo__post">
            <Autor 
              avatar={Avatar}
              username="Jose Marinho"
              data="Jan 10, 2020"
              time_read="4 min read"
            />
            <Share />
          </div>
          <div className="corpo__post">
            <Postagem conteudo={post.conteudo}/>
            <ShareComp />
          </div>

          <div className="tags__post">
            <p>Tags: <span>Product Design</span>, <span>Culture</span></p>
          </div>

          <div className="container__userProfile">
            <Link to="/">
              <Assinatura 
                avatar={Avatar}
                username="Jose Marinho"
                user_description="is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder."
              />
            </Link>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="outhers__posts">
            <div className="destaque__posts">
              <h2>What to read next</h2>
            </div>
          <ArtigosSimple />
          </div>

          <div className="newsletter__post">
            <News />
          </div>

        </div>
      </div>
    </section>
  )
}

export default PostPage