
import React, { useState, useEffect }  from 'react'
import Card from '../cards/Card'

import './artigos.scss'

import { Link } from 'react-router-dom'
import axios from 'axios'

const ArtigosHome = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = async ()=> {
        const res = await axios.get('http://localhost:5000/posts')
        setPosts(res.data)
    }

    useEffect(()=> {
        fetchPosts()
    }, [])


    return (
        <section className="artigos">
            <div className="container__artigos center">

                <div className="destaque__artigos">
                    <h2>All posts</h2>
                </div>

                <div className="cards">
                    {posts.map((post, index) => (
                        <div key={index}>
                            <Link to={'/posts/read/'+post.id}>
                                <Card 
                                    className="card__unique"
                                    tituloPost={post.titulo}
                                    imageUrl={post.capa}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ArtigosHome