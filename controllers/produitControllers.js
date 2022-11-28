const Produit = require('../models/Produit');

exports.getAllProduits = async (req, res, next ) => {
    try {
        const [produits, _] = await Produit.findAll();
        
        res.status(200).json({produits});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewProduit = async (req, res, next ) => {
    try {
        let{ id_pers, libelle, id_user } = req.body;
        let produit = new Produit (id_pers, libelle, id_user);
    
        produit = await Produit.save();
    
        res.status(200).json({message: "Produit created"});
    } catch (error) {
        console.log(error);
        next(error);        
    }
}

exports.getProduitById = async (req, res, next ) => {
    try {
        let produitId = req.params.id;
        let [produit, _] = await Produit.findById(produitId);

        res.status(200).json( {produit: produit[0]} );
    } catch (error) {
        next(error);
    }
}



exports.updateProduit = async (req, res, next) => {
    try {
        let produitId = req.params.id;

        if(!produitId){
            return res.status(400).json({"message":` La produit ${req.body.id} nexiste pas`});
        }
        if(produit.id_pers) produit.id_pers = req.body.id_pers;
        if(produit.libelle) produit.libelle = req.body.libelle;
        if(produit.user_id) produit.user_id = req.body.user_id

        produit = await Produit.save();

        res.status(200).json({"message":'produit modified'});
    } catch (error) {
        next(error);
    }
}

exports.deleteProduit = async (req, res, next) => {
    try {
        let produitId = req.params.id;
        set [produit, _] = await Produit.deleteOne([produitId, _]);

        res.status(200).json({"message":'produit deleted'});
    } catch (error) {
        next(error);
    }
}
  