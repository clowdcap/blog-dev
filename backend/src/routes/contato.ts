import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './../lib/prisma'

export async function contatoRouter(fastify: FastifyInstance) {

    /* Ve Contagem de Contact */ // OK
    await fastify.get('/contact/count', async () => {

        const count = await prisma.contact.count()
        return { count }

    })

    /* Pega Todos os Contact */ // OK
    await fastify.get('/contact', async () => {
        const news = await prisma.contact.findMany()
        return news
    })

    /* Cria Contact */ // OK
    await fastify.post('/contact/create', async (request, reply) => {
        
        const createUsersBody = z.object({
            name: z.string(),
            email: z.string(),
            descricao: z.string(),
        })
    
        const input = createUsersBody.parse(request.body)
        
        try {
            await prisma.contact.create({
                data: input
            })
    
            return reply.status(201).send("Contato registrado com sucesso!")
        } catch (error) {
            console.log(error)
        }

    })

    /* Pega um Contact */ // OK
    await fastify.get('/contact/read/:id', async (request, reply) => {

        const readUserInput = z.object({
            id: z.string().nonempty(),
        })
    
        const readUser = async (input: any) => {

            readUserInput.parse(input)
            
            const { id } = input
            const user = await prisma.contact.findUnique({
                where: {
                    id
                }
            })
        
            return user
        }
        
        const id = request.params
        const user = await readUser(id)
        
        reply.send(user)

    })
    
    
}