const User = require('../models/index')



const saveUser = (app) => {
    app.post('/save_user' , async (req , res) => {
        let {name , surname , dateOfBirth , grade} = req.body

try {
    let user = new User ({
        name , surname , dateOfBirth , grade
    })
    const userSaved = await user.save() 
    // console.log('userSaved', userSaved)
    res.send({message:"User succesfully saved", userSaved})
} catch (error) {
    console.error("post error",error)
    res.send({message:"post error"}).status(401)
}

    })

    app.get('/get_users' , async (req , res) => {

        try {
            const findUsers = await User.find()
            console.log('findUsers', findUsers)
            res.send(findUsers)
                    } catch (error) {
            console.log('error', error)
        }
    })
}

module.exports = {saveUser}