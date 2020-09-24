
interface DTOUser{

name : string,
email : string,
friend ?: string

}

class User{

        name : string
        email : string
        friend ?: string

      constructor({name,email,friend} : DTOUser ){
      this.name = name
      this.email = email
      this.friend = friend


      }



}

export default User