const UserController = require('./controllers/UserController')

module.exports = (app) => {
    //create user
    app.post('/user', UserController.create)

    //edit user
    app.put('/user/:userId', UserController.put)

    //delete user
    app.delete('/user/:userId', UserController.remove)

    //get user
    app.get('/user/:userId', UserController.show)

    //get all user
    app.get('/user', UserController.index)
}