const Ligne_commande = require('../models/ligne_commande');

exports.getAllLigne_commandes = async (req, res, next ) => {
    try {
        const [ligne_commandes, _] = await Ligne_commande.findAll();
        
        res.status(200).json({ligne_commandes});
    } catch (error) {
        console.log(error);
        next(error);
    }
} 

exports.createNewLigne_commande = async (req, res, next ) => {
    try {
        let{ id_com, id_produit, quantite, prix_unitaire } = req.body;
        let ligne_commande = new Ligne_commande (id_com, id_produit, quantite, prix_unitaire);
    
        ligne_commande = await Ligne_commande.save();
    
        res.status(200).json({message: "ligne_commande created"});
    } catch (error) {
        console.log(error);
        next(error);        
    }
}

exports.getLigne_commandeById = async (req, res, next ) => {
    try {
        let ligne_commandeId = req.params.id;
        let [ligne_commande, _] = await Ligne_commande.findById(ligne_commandeId);

        res.status(200).json( {ligne_commande: ligne_commande[0]} );
    } catch (error) {
        next(error);
    }
}



exports.updateLigne_commande = async (req, res, next) => {
    try {
        let ligne_commandeId = req.params.id;

        if(!ligne_commandeId){
            return res.status(400).json({"message":` La ligne_commande ${req.body.id} nexiste pas`});
        }
        if(ligne_commande.id_com) ligne_commande.id_com = req.body.id_com;
        if(ligne_commande.id_produit) ligne_commande.id_produit = req.body.id_produit;
        if(ligne_commande.quantite) ligne_commande.quantite = req.body.quantite;
        if(ligne_commande.prix_unitaire) ligne_commande.prix_unitaire = req.body.prix_unitaire

        ligne_commande = await Ligne_commande.save();

        res.status(200).json({"message":'ligne_commande modified'});
    } catch (error) {
        next(error);
    }
}

exports.deleteLigne_commande = async (req, res, next) => {
    try {
        let ligne_commandeId = req.params.id;
        set [ligne_commande, _] = await Ligne_commande.deleteOne([ligne_commandeId, _]);

        res.status(200).json({"message":'ligne_commande deleted'});
    } catch (error) {
        next(error);
    }
}
  