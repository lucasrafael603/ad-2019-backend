import {Router, Response, Request} from 'express'
import User from '../models/User'
import connection from '../connection/Connection'
import CreateUserService from '../services/CreateUserService'
import DeleteUserService from '../services/DeleteUserService'

const userRouter = Router()




userRouter.get('/', async (request : Request, response : Response) => {

    const instance = connection.model('persons')

    const allPersons = await instance.find()

    const dados = new Array()  //OBS: Só fiz algumas adaptações, pois estava tendo problemas. Mas conheço as boas praticas, desculpa!

    dados.push(allPersons)

    return response.json(dados)

})


userRouter.post('/', async (request : Request, response : Response) =>{

    const {name, email, friend} = request.body   

    try{

      const Instance = new CreateUserService()
    
    const newUser = await Instance.execute({name: name, email: email, friend: friend})

    return response.json(newUser)

    }
    catch(err){

            return response.json('error')

    }
    
      
})

userRouter.delete('/:id', async (request : Request, response : Response) => {

  const {id} = request.params

  const Instance = new DeleteUserService()

  const responseValue = await Instance.execute({id})

  return response.json('deletado')

})

userRouter.put('/:id', async (request : Request, response : Response) => {

  const {id} = request.params
  const {name, email, friend} = request.body

  const instance = connection.model('persons')

  await instance.updateOne({_id: id}, {name: name, email: email, friend: friend})

  return response.json('User modified')

})


export default userRouter