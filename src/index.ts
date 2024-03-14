import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import { resolvers, typeDefs } from './graphql'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'

dotenv.config()
const app = express()
const port = process.env.PORT || 4000

const bootstrapServer = async () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // plugins: [ApolloServerPluginLandingPageDisabled()]
    })
    await server.start()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use("/graphql", expressMiddleware(server))


    app.get("/", (req, res) => {
        res.send(`express ready at http://localhost:${port}`)
    })

    app.listen(port, () => {
        console.log(`express ready at http://localhost:${port}`)
        console.log(`graphql ready at http://localhost:${port}/graphql`)
    })

}

bootstrapServer()