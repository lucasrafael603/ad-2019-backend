import { response } from 'express'
import connection from '../connection/Connection'

interface DTOUser{

name : string,
email : string,
friend ?: string


}

export default class CreateUserService{


       async execute({name, email, friend = ''}: DTOUser ){

          const instance = connection.model('persons')

          if(name.length <= 2){

            throw new Error('Use a name longer than 2 letters ')
            
          }

          if(!name){


            throw new Error('Please complete field User')


          }

          if(!email){

            throw new Error('Please complete field Email')

          }
          
         

          const finded = await instance.find( {email: email} ).limit(1).select({email: 1})
          console.log('v',finded.length)
          
          if(finded.length > 0){

            throw new Error('E-mail already registered')
          }

           const newUser =  new instance({
              name,
              email,
              friend
             })
      
             await newUser.save()
          
            

    
        

          return newUser

        }
}