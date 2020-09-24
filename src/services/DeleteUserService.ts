import connection from '../connection/Connection'

interface DTOId{

  id: string

}

export default class DeleteUserService{


       async execute({id} : DTOId){

          const instance = connection.model('persons')

         const response = await instance.deleteOne({_id: id })

          return response
        

          

        }
}