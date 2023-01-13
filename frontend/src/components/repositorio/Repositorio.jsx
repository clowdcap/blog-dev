import React, { useEffect, useState } from 'react'
import './repositorio.scss'
import BoxRepo from './BoxRepo'

const Repositorio = () => {
    
    const [data, setData] = useState([]);
    const [tec, setTec] = useState('JavaScript')
    
    const fetch_api = async () => {
        const response = await fetch('https://api.github.com/users/clowdcap/repos')
        const response_data = await response.json() 
        if (response_data) {
            setData(response_data)
        }
    }
    
    useEffect(() => {
        fetch_api()
    }, [])
    
    const troca_tecnologia = () => {
        const tecnologia_selecionada = 
            document.querySelector('#tecnologia').value
        setTec(tecnologia_selecionada)
    }
    
    return (
        <section className="repositorio">
            
            <div className="container__repositorio">
                <div className="titulo__repositorio">
                    <h1>Portifólio de Projetos</h1>
                    <h3>Repositorio do Github</h3>
                </div>
                
                <div className="menu__repositorio">
                    <div className="titulo__repositorio">
                        <h3>Selecione a Tecnologia</h3>
                    </div>
                    <select name="tecnologia" id="tecnologia">
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="HTML">HTML</option>
                        <option value="SCSS">Sass</option>
                    </select>
                    <button 
                        type="submit" 
                        className="botao" 
                        onClick={troca_tecnologia}>Listar</button>
                </div>
                
                <div className="sep center">
                    <hr />
                </div>         
                
                <ul className="lista__repositorio">      

                    {data.map((item) => {
                        if (item.language === tec) {
                            return (
                                <BoxRepo 
                                    id={item.id}
                                    nome={item.name}
                                    linguagem = {item.language}
                                    urlLink = {item.svn_url}
                                    descricao = {item.description}
                                />
                            )
                        }
                    })}
                </ul>
            </div>
        </section> 
    )
}

export default Repositorio