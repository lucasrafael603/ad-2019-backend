import mongoose, {Schema} from 'mongoose';
  
const connection = mongoose
 
//Configurações Mongoose
connection.Promise = global.Promise;
connection.connect('mongodb://localhost/bd', {

      useMongoClient: true

} ).then((values) => {

console.log('Conexão Efetuada',values)

}).catch((values) => {

  console.log('Problemas de conexão',values)
})


const PersonSchema = new Schema( {

    name: {

      type: String,
      require: true
    },
    email: {

      type: String,
      require: true,

    },
    friend: {

      type: String,
      require: false

    }
  

})

connection.model('persons', PersonSchema)

const PersonConstruct = connection.model('persons')

// Testando register
// new PersonConstruct({

//   name: 'Lucas',
//   email: 'lucas@hotmail.com',
//   friend: ''

// }).save().then(() => console.log('sucess')).catch((err) => console.log('failed' + err))
// const teste = 'Lucas'
 //PersonConstruct.deleteOne({_id: '5f694eea84142b2090fd946d'}).then(() => console.log('sucess'))
 // PersonConstruct.deleteOne({where: {name: teste }}).then(() => console.log('sucess'))



export default connection