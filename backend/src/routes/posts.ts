import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './../lib/prisma'

export async function postsRouter(fastify: FastifyInstance) {

    /* Ve Contagem de Posts */ // OK
    await fastify.get('/posts/count', async () => {

        const count = await prisma.post.count()
        return { count }

    })

    /* Pega Todos os Posts */ // OK
    await fastify.get('/posts', async () => {

        const posts = await prisma.post.findMany()
        return posts
        
    })

    /* Cria Post */ // OK
    await fastify.post('/posts/create', async (request, reply) => {
        
        const createNewsBody = z.object({
            titulo: z.string().nonempty(),
            descricao: z.string(),
            conteudo: z.string(),
            capa: z.string(),
            autor: z.string(),
        })
    
        const input = createNewsBody.parse(request.body)
        
        await prisma.post.create({
            data: input
        })
      
        return reply.status(201).send("Post Criado com sucesso!")

    })
            
    /* Pega um Post */ // OK
    await fastify.get('/posts/read/:id', async (request, reply) => {

        const readPostInput = z.object({
            id: z.string().nonempty(),
        })
    
        const readPost = async (input: any) => {

            readPostInput.parse(input)
            
            const { id } = input
            const post = await prisma.post.findUnique({
                where: {
                    id
                }
            })
        
            return post
        }
        
        const id = request.params
        const post = await readPost(id)
        
        reply.send(post)

    })

    /* Edita o Post */ // OK
    await fastify.patch('/posts/post/update/:id', async (request, reply) => {

        const UpdatePostInput = z.object({
            titulo: z.string().optional(),
            descricao: z.string().optional(),
            conteudo: z.string().optional(),
            capa: z.string().optional(),
            autor: z.string().optional(),
        })

        const updatePost = async (data: any, id: string) => {
   
            const output =  UpdatePostInput.parse(data)

            // const { id, titulo, descricao, conteudo, capa, autor } = input
            
            const post = await prisma.post.update({
                where: { id },
                data: output
            })
            return post
        }

        const post = await updatePost(request.body, request.params.id)

        // try {
        //     const post = await updatePost({ ...request.params, ...request.body })
        // } catch (error) {
        //     console.log(error)
        // }

        return reply.status(201).send("Post Editado com sucesso!")

    })

    /* Deleta o Post */ // OK
    await fastify.delete('/posts/post/delete/:id', async (request, reply) => {
        
        const deletePostInput = z.object({
            id: z.string().nonempty(),
        })

        async function deletePost(input: any) {
            deletePostInput.parse(input)
            
            const { id } = input
            const post = await prisma.post.delete({
              where: {
                id
              }
            })
            return post
        }

        const post = await deletePost(request.params)

        return reply.send("Post Deletado com sucesso!")
        

    })

}