module.exports = {
    // get user by id
    show(req, res){
        res.send('User Detail in routes ' + req.params.userId)
    },

    // get all user
    index(req, res){
        res.send('All user in routes')
    },

    // create user
    create(req, res){
        res.send('Create user in routes: ' + JSON.stringify(req.body))
    },

    // edit user
    put(req, res){
        res.send('Edit user in routes: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },

    // delete user
    remove(req, res){
        res.send('Delete user in routes: ' + req.params.userId + ' : ' +JSON.stringify(req.body))
    }
}