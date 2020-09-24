import mongoose, {Schema, Query} from 'mongoose';
import {Router, Response, Request, query, response} from 'express'
import User from '../models/User'
import connection from '../connection/Connection'
import CreateUserService from '../services/CreateUserService'
import DeleteUserService from '../services/DeleteUserService'
import { json } from 'body-parser';
import  mailgun from 'mailgun-js'
import * as mailgunLoader from 'mailgun-js'
import nodemailer from 'nodemailer'
import nodemailMailgun, {MailOptions} from 'nodemailer-mailgun-transport'

const emailRoutes = Router()

interface DTO{

  mailOptions : MailOptions | String

  

}


emailRoutes.post('/', async (request , response ) => {

  const {name, email, friend=''} = request.body

  var domain = "sandboxa57bed49b89b4208b6214ddc44a8ba24.mailgun.org";
  var mailgun = require("mailgun-js")({ apiKey: '78684c1b63b76b4d73742a033419e987-cb3791c4-88bf2136', domain: domain });
  var mailcomposer = require("mailcomposer");
  
  var mail = mailcomposer({
  from: "lucas.rafael1997@hotmail.com",
  to: email,
  subject: "Friend Secret",
  body: `Your secret friend is ${friend}` ,
  html: '<b> Hello!!!  </b>'
  });
  
  mail.build(function(message : string) {
  
  var dataToSend = {
  to: email,
  message: 'Congratulations, you have a new Friend Secret!!!! Your friend its ' + friend
  };
  
  mailgun.messages().sendMime(dataToSend, function (sendError : Error, body :String) {
  if (sendError) {
  console.log(sendError);
  console.log(body);
  return;
  }
  });
  });

  const ResponseEmailFormat = {
        name,
        email,
        friend

  }

  return response.json({'Sucess': ResponseEmailFormat})
})

  

export default emailRoutes




// const auth = {
//     auth: {
//     api_key: 'cb3791c4-88bf2136',
//     domain: 'sandboxa57bed49b89b4208b6214ddc44a8ba24.mailgun.org' 
//   }
// }

// // let mailgun = mailgunLoader ({

// //     api_key: 'cb3791c4-88bf2136',
// //     domain: 'sandboxa57bed49b89b4208b6214ddc44a8ba24.mailgun.org' 

// // })

// let transporter = nodemailer.createTransport( nodemailMailgun(auth))

// // let mailgun = mailgunLoader({
// //   api: ''
// //   domain: ''
    
// // })



// const sendEmail = (to: string, from: string, subject: string, content: string) =>{

//   let data = {
//     to,
//     from,
//     subject,
//     text: content

//   }

//   return 

// }


// // de: 'Main Gun <sandboxa57bed49b89b4208b6214ddc44a8ba24.mailgun.org>',
// //   para : ' lucas.rafael1997@hotmail.com ' , 
// //   assunto : ' Olá ' , 
// //   texto : ' Testando algumas maravilhas do Mailgun! ' 



// // transporter.sendMail(mailOptions, function (err, data) {
  

// //     if(err){

// //       console.log('Error', err)

// //     }else{

// //         console.log('Message sent!!!')

// //     }

// //       return response.json('ok')
// // } )



// // mailgun . mensagens ( ) . enviar ( dados , função ( erro , corpo ) {    
// //   console . log ( corpo ) ;
// // } ) ;

    