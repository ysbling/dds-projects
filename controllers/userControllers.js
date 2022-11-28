const User = require("../models/User");

exports.getAllUsers = async (req, res, next ) => {
    try {
        const [users, _] = await User.findAll();

        res.status(200).json({users});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewUser = async (req, res, next ) => {
    try {
        let{ nom, prenom, telephone, role, login, password } = req.body;
        let user = new User (nom, prenom, telephone, role, login, password);
    
        user = await User.save();
    
        res.status(200).json({message: "User created"});
    } catch (error) {
        console.log(error);
        next(error);        
    }
}

exports.getUserById = async (req, res, next ) => {
    try {
        let userId = req.params.id;
        let [user, _] = await User.findById(userId);

        res.status(200).json( {user: user[0]} );
    } catch (error) {
        next(error);
    }
}



exports.updateUser = async (req, res, next) => {
    try {
        let userId = req.params.id;

        if(!userId){
            return res.status(400).json({"message":` LeUser ${req.body.id} nexiste pas`});
        }
        if(user.nom) user.nom = req.body.nom;
        if(user.prenom) user.prenom = req.body.prenom;
        if(user.telephone) user.telephone = req.body.telephone;
        if(user.role) user.role = req.body.role;
        if(user.login) user.login = req.body.login;
        if(user.password) user.password = req.body.password;

        user = await User.save();

        res.status(200).json({"message":'User modified'});
    } catch (error) {
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        let userId = req.params.id;
        set [user, _] = await User.deleteOne([userId, _]);

        res.status(200).json({"message":'User deleted'});
    } catch (error) {
        next(error);
    }
}
  