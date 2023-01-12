import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './../lib/prisma'

export async function usersRouter(fastify: FastifyInstance) {

    /* Ve Contagem de Usuarios */ // OK
    await fastify.get('/users/count', async () => {

        const count = await prisma.user.count()
        return { count }

    })

    /* Pega Todos os Usuarios */ // OK
    await fastify.get('/users', async () => {

        const users = await prisma.user.findMany()
        return users
        
    })

    /* Cria User */ // OK
    await fastify.post('/users/create', async (request, reply) => {
        
        const createUsersBody = z.object({
            username: z.string().nonempty(),
            name: z.string().optional(),
            sobrenome: z.string().optional(),
            email: z.string(),
            telefone: z.string().optional(),
            passwords: z.string(),
            avatar: z.string().optional(),
            descricao: z.string().optional(),
        })
    
        const input = createUsersBody.parse(request.body)
        
        await prisma.user.create({
            data: input
        })

        return reply.status(201).send("Usuario Criado com sucesso!")

    })
            
    /* Pega um User */ // OK
    await fastify.get('/users/profile/:id', async (request, reply) => {

        const readUserInput = z.object({
            id: z.string().nonempty(),
        })
    
        const readUser = async (input: any) => {

            readUserInput.parse(input)
            
            const { id } = input
            const user = await prisma.user.findUnique({
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

    /* Edita o User */ // OK
    await fastify.patch('/users/profile/update/:id', async (request, reply) => {

        const UpdateUserInput = z.object({
            username: z.string().optional(),
            name: z.string().optional(),
            sobrenome: z.string().optional(),
            email: z.string().optional(),
            telefone: z.string().optional(),
            passwords: z.string().optional(),
            avatar: z.string().optional(),
            descricao: z.string().optional()
        })

        const updateUser = async (data: any, id: string) => {
            const output =  UpdateUserInput.parse(data)
            const user = await prisma.user.update({
                where: { id },
                data: output
            })
            return user
        }

        const user = await updateUser(request.body, request.params.id)


        return reply.status(201).send("User Editado com sucesso!")

    })

    /* Deleta o User */ // OK
    await fastify.delete('/users/profile/delete/:id', async (request, reply) => {
        
        const deleteUserInput = z.object({
            id: z.string().nonempty(),
        })

        async function deleteUser(input: any) {
            deleteUserInput.parse(input)
            
            const { id } = input
            const user = await prisma.user.delete({
                where: {
                    id
                }
            })
            return user
        }

        const user = await deleteUser(request.params)

        return reply.send("Usuario Deletado com sucesso!")
        

    })

}


