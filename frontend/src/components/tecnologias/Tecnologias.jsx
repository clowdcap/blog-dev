import React from 'react'
import BoxTech from './BoxTech'

import './tecnologias.scss'

import {
    SiNodedotjs,
    SiFastify, 
    SiPrisma, 
    SiSass, 
    SiTailwindcss, 
    SiCss3, 
    SiMongodb, 
    SiSqlite 
} from 'react-icons/si'

import { FaDatabase } from 'react-icons/fa'

const Tecnologias = () => {
    return (
        <section className="tecnologias">
            <div className="container__tecnologias center">
                
                <div className="titulo__tecnologias">
                    <h1>Tecnologias</h1>
                    <h3>Frameworks e Bibliotecas</h3>
                </div>
                
                <div className="boxes__tecnologias">
                
                    <BoxTech 
                        icone1={<SiFastify />} 
                        icone2={<SiPrisma />}   
                        icone3={<SiNodedotjs />}  
                        linguagem="Frontend & Backend" 
                        descricao1="React Js, NextJS & TypeScript"  
                        descricao2="Node Js, Prisma & Fastify"  
                        />
                    
                    <BoxTech 
                        icone1={<SiSass />}  
                        icone2={<SiTailwindcss />}  
                        icone3={<SiCss3 />}  
                        linguagem="Estilização"  
                        descricao1="Scripts e Frameworks" 	 
                        descricao2="CSS, Sass, Bootstrap & TailwindCss" 	 
                        />
                    
                    <BoxTech 
                        icone1={<SiSqlite />}  
                        icone2={<FaDatabase />}  
                        icone3={<SiMongodb />}  
                        linguagem="Banco de Dados"  
                        descricao1="Relacional & Não Relacional"  
                        descricao2="SQLite3, MySQL & MongoDB" 
                        />
                
                </div>
                
            </div>
        </section>
    )
}

export default Tecnologias