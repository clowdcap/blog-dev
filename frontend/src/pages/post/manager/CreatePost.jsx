import React, { useState, useRef } from 'react'
import './../postmanager.scss'
import axios from 'axios'


const CreatePost = () => {

    const formulario = useRef(null)
    
    const defaultCapa = 'https://th.bing.com/th/id/R.03bf396dbabe50572e780495662ac3d9?rik=8JmEFpQz1BQ6qQ&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2flovable-wallpapers-for-desktop-hd-nature-pc-hd-wallpapers.jpg&ehk=MZadUbae4WxrPnjg10Te86MkBjFfyZbiSRlkYe9dT68%3d&risl=&pid=ImgRaw&r=0'

    const [error, setError] = useState(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageFile, setImageFile] = useState(defaultCapa)
    const [autor, setAutor] = useState('Jose')
    const [content, setContent] = useState('')

    const handleTitle = (event) => {
        const value = event.target.value
        setTitle(value)
    }

    const handleDescription = (event) => {
        const value = event.target.value
        setDescription(value)
    }

    const handleImageFile = (event) => {
        const value = event.target.value
        setImageFile(value)
    }
    
    const handleAutor = (event) => {
        const value = event.target.value
        setAutor(value)
    }

    const handleContent = (event) => {
        const value = event.target.value
        setContent(value)
    }

    const handleInputs = () => {
        setTitle('')
        setDescription('')
        setImageFile('')
        setAutor('')
        setContent('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await axios.post('http://localhost:5000/posts/create', {
                "titulo": title,
                "descricao": description,
                "conteudo": content,
                "capa": imageFile,
                "autor": autor
            })

            console.log('Sucesso')
            setError({message: 'Create post successful'})
            handleInputs()

        } catch (error) {
            setError({message: 'Error, post not created'})
            console.log(error)
        }
    }

    
    return (
        <>
            <section className="write">
                <div className="container__write center">
                    <div className="title__write">
                        <h1>Create Post</h1>
                        <h3>Write your post here</h3>

                        <p>{error ? error.message : null}</p>
                    </div>
                    <form className="form__write" onSubmit={handleSubmit} ref={formulario}>
                        <div className="col1__form__write">
                            
                            <p>Post Title</p>
                            <input 
                                type="text" 
                                name="titulo_write" 
                                value={title}
                                onChange={handleTitle}
                                id="titulo_write" />
                            
                            <p>Description</p>
                            <input 
                                type="text" 
                                name="description_write" 
                                value={description}
                                onChange={handleDescription}
                                id="description_write" />
                            
                            <p>Front Image</p>
                            <input 
                                type="file" 
                                name="front_image_write" 
                                value={imageFile}
                                onChange={handleImageFile}
                                id="front_image_write" />

                            <p>Autor</p>
                            <input 
                                type="text" 
                                name="description_write" 
                                value={autor}
                                onChange={handleAutor}
                                id="description_write" />

                        </div>
                        <div className="col2__form__write">
                            
                            <p>Content</p>
                            <textarea name="content_write" 
                                value={content}
                                onChange={handleContent} />

                            <button type="submit">Create Post</button>

                            
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CreatePost
