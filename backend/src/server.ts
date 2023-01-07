/* Frameworks e Bibliotecas */
import Fastify from "fastify"
import cors from "@fastify/cors"
/* Rotas */
import { postsRouter } from "./routes/posts"


/* Funções */
const servidor = async () => {

    /* Fastify */
    const fastify = Fastify({ logger: true })
    
    /* Cors */
    await fastify.register(cors, { origin: true })

    /* Rotas */
    fastify.get('/', async () => {
        return 'Bem vindo ao Backend do Blog'
    })

    /* Rotas Posts */
    fastify.register(postsRouter)

    /* Ligando o servidor */
    await fastify.listen({ port: 5000 })

}
  
// Inicia o fastify
servidor()
