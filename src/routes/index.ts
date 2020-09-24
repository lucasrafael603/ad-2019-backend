import express from 'express'
import userRouter from '../routes/user.routes'
import sortRoutes from '../routes/sort.routes'
import emailRoutes from '../routes/email.routes'

const routes = express()


routes.use('/users/email', emailRoutes)
routes.use('/users', userRouter)
routes.use('/users/sort', sortRoutes)


export default routes