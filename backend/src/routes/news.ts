import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './../lib/prisma'

export async function newsRouter(fastify: FastifyInstance) {

    /* Ve Contagem de Newsletter */ // OK
    await fastify.get('/newsletter/count', async () => {

        const count = await prisma.newsletter.count()
        return { count }

    })

    /* Pega Todos os Newsletter */ // OK
    await fastify.get('/newsletter', async () => {
        const news = await prisma.newsletter.findMany()
        return news
    })

    /* Cria Newsletter */ // OK
    await fastify.post('/newsletter/create', async (request, reply) => {
        
        const createUsersBody = z.object({
            email: z.string(),
        })
    
        const input = createUsersBody.parse(request.body)
        
        try {
            await prisma.newsletter.create({
                data: input
            })
    
            return reply.status(201).send("Newsletter registrado com sucesso!")
        } catch (error) {
            console.log(error)
        }

    })

    /* Pega um Newsletter */ // OK
    await fastify.get('/newsletter/read/:id', async (request, reply) => {

        const readUserInput = z.object({
            id: z.string().nonempty(),
        })
    
        const readUser = async (input: any) => {

            readUserInput.parse(input)
            
            const { id } = input
            const user = await prisma.newsletter.findUnique({
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