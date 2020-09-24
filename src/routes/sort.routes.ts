import mongoose, {Schema, Query} from 'mongoose';
import {Router, Response, Request, query} from 'express'
import User from '../models/User'
import connection from '../connection/Connection'
import CreateUserService from '../services/CreateUserService'
import DeleteUserService from '../services/DeleteUserService'
import { json } from 'body-parser';

const sortRoutes = Router()




sortRoutes.get('/', async (request : Request, response : Response) => {

    const instance = connection.model('persons')

    const allPersons = await instance.find()

    

    var person = new Array()
    var friendSort = new Array()

    if(allPersons.length % 2 == 0){



   

    for(let p = 0; allPersons.length > p ; p++){

      person.push('Position' + p)
      // console.log(count)
    }

    for(let p = 0; allPersons.length > p ; p++){

      friendSort.push('Position' + p)
      // console.log(count)
    }



   // const nene = instance.db.name

    //var arrayModified = allPersons

    for(let i = 0; person.length > i ; i++){

     var j = Math.floor(Math.random() * friendSort.length ) //Se basea no tamanho atual do array
      //count.length
      while(i == j){
        
        j = Math.floor(Math.random() * friendSort.length ) //Se basea no tamanho atual do array
       // console.log('pessoa', i)
       // console.log('sorteado', j)
        console.log('refazer')
      }

      var personFirst = await allPersons[i].id
      var friendSorted = await allPersons[j].id

     const ret = await instance.find({
          _id: personFirst

      }).select({name: 1, _id: 0})

      const convert = JSON.stringify(ret)
      const convertido = JSON.parse(convert)
      
      const teste = String(convertido) 
      
      
      console.log(teste)
     // const tstando = convertido[0]
     // console.log(tstando[0].name)
        //const desct = 'name'

      await instance.findByIdAndUpdate(personFirst, { ////importante

          friend: allPersons[j].id

       })
      
    //   console.log(ret)

      friendSort.splice(j,1)
       
        
      
    }



      return response.json('ok')
    }

      return response.json('error')

    })

      //console.log('pessoa', i)

        //friend

      //console.log('AmigoSorteado', j)

      //pessoa.splice(i,1)
      

      
      //var proc = await allPersons[j].id
      //console.log('part1',proc)
      //var ValueEstatic = await instance.find({_id: proc})
      //console.log('parte2',ValueEstatic)
     //var testeRetorno = await allPersons[i].updateOne({name: ValueEstatic.find(name)})
     //var ValueEstatic = instance.findById('1')
     //console.log(testeRetorno)

    
  
      // var sorteados = new Array;
      // var valorMaximo = allPersons.length;
      
      // function criarUnico() {
      //     if (sorteados.length == valorMaximo) {
      //         if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
      //         else return;
      //     }
      //     var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
      //     while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
      //         sugestao = Math.ceil(Math.random() * valorMaximo);
      //     }
      //     sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
      //     return sugestao; // devolver o numero úni
      //   }

     //console.log('valor aleatorio',unico)
     //console.log('quantidade de posições',count.length)
      
      

      //allPersons.find()
       //var id = arrayModified[i].id
      //instance.findById(id)
   
   //const test = await instance.updateOne({_id: allPersons[j]._id}, {friend: allPersons.length = i})
    //await instance.updateOne({_id: id}, {name: name, email: email, friend: friend})
    //allPersons[j]

    //value.name
    
      //console.log(test)
      //console.log(arrayModified)



      //let list = this.shuffleArray(this.state.list) //embaralha o array
      // let amigos = await instance.find()
      // let count = 0;
  
      // while(amigos.length > 0){
  
      //   let participante = amigos[count];
      //   var index = Math.floor(Math.random() * amigos.length); 
      //   let amigo = amigos.find((amigo, i) => {
      //     return i === index && amigo.id !== participante.id;
      //   });
  
      //   if(amigo){
      //     participante.id = amigo.id;
      //     amigos.splice(index, 1); //retiro o amigo da lista pra nao ser escolhido novamente
      //     count++;
      //   }




      
    

    // for(let i = allPersons.length -1; i > 0; i--){

    //   const j = Math.floor(Math.random() * (i + 1) )
      
    // }

  






export default sortRoutes