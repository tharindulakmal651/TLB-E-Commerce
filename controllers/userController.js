import User from "../models/user.js";
import bcrypt from "bcrypt";

export function createUser(req, res) {
   const newUserData = req.body
   newUserData.password = bcrypt.hashSync(newUserData.password, 10);
   


   const user = new User(newUserData)
    user.save().then(() => {
        res.json({
            message: "User created successfully !!!"
        })
    }).catch(() => {
        res.json({
            message: "Error creating User !!!"      
        })

    })  
}


export function loginUser(req, res) {
 
    User.find({ email: req.body.email }).then(
    (users) => {
     if(users.length == 0) {
        res.json({
            message: "user not found !!!"
        })
     } else{

        const user = users[0]

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
        
        if(isPasswordCorrect) {
            res.json({
                message: "Login successful !!!"
            })
        } else {
            res.json({
                message: "Incorrect password !!!"
            })
        }

       
     }
        
    }
)

}
