const Commande = require('../models/Commande');

exports.getAllCommandes = async (req, res, next ) => {
    try {
        const [commandes, _] = await Commande.findAll();
        
        res.status(200).json({commandes});
    } catch (error) {
        console.log(error);
        next(error);
    }
} 

exports.createNewCommande = async (req, res, next ) => {
    try {
        let{ id_pers, description, id_user } = req.body;
        let commande = new Commande (id_pers, description, id_user);
    
        commande = await Commande.save();
    
        res.status(200).json({message: "Commande created"});
    } catch (error) {
        console.log(error);
        next(error);        
    }
}

exports.getCommandeById = async (req, res, next ) => {
    try {
        let commandeId = req.params.id;
        let [commande, _] = await Commande.findById(commandeId);

        res.status(200).json( {commande: commande[0]} );
    } catch (error) {
        next(error);
    }
}



exports.updateCommande = async (req, res, next) => {
    try {
        let commandeId = req.params.id;

        if(!commandeId){
            return res.status(400).json({"message":` La commande ${req.body.id} nexiste pas`});
        }
        if(commande.id_pers) commande.id_pers = req.body.id_pers;
        if(commande.description) commande.description = req.body.description;
        if(commande.user_id) commande.user_id = req.body.user_id

        commande = await Commande.save();

        res.status(200).json({"message":'commande modified'});
    } catch (error) {
        next(error);
    }
}

exports.deleteCommande = async (req, res, next) => {
    try {
        let commandeId = req.params.id;
        set [commande, _] = await Commande.deleteOne([commandeId, _]);

        res.status(200).json({"message":'commande deleted'});
    } catch (error) {
        next(error);
    }
}
  