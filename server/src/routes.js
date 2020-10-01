const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')

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
    app.get('/user', isAuthenController, UserController.index)

    //login
    app.post('/login', UserAuthenController.login)

    //create blog
    app.post('/blog', BlogController.create)
    //edit blog
    app.put('/blog/:blogId', BlogController.put)
    //delete blog
    app.delete('/blog/:blogId', BlogController.remove)
    //get blog by id
    app.get('/blog/:blogId', BlogController.show)
    //get all blog
    app.get('/blogs', BlogController.index)
}