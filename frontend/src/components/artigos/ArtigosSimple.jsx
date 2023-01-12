import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../cards/Card'

import "./artigos.scss"

const ArtiogsSimple = () => {

  const [posts, setPosts] = useState([])

  const fetchPosts = async ()=> {
    const res = await axios.get('http://localhost:5000/posts')
    setPosts(res.data)
  } 

  useEffect(()=> {
    try {
      fetchPosts()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="boxes__posts">

      {posts.slice(0, 2).map((item, index) => (
        <div key={index}>
          <Link to={'/posts/read/'+item.id}>
            <Card 
              className="card__unique"
              tituloPost={item.titulo}
              imageUrl={item.capa}
            />
          </Link>
        </div>
      ))}

    </div>
  )
}

export default ArtiogsSimple