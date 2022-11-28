const Reliquat = require('../models/reliquat');

exports.getAllReliquats = async (req, res, next ) => {
    try {
        const [reliquats, _] = await Reliquat.findAll();
        
        res.status(200).json({reliquats});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewReliquat = async (req, res, next ) => {
    try {
        let{ id_com, designation, som_paye, som_due, id_user } = req.body;
        let reliquat = new reliquat (id_com, designation, som_paye, som_due, id_user);
    
        reliquat = await Reliquat.save();
    
        res.status(200).json({message: "reliquat created"});
    } catch (error) {
        console.log(error);
        next(error);        
    }
}

exports.getReliquatById = async (req, res, next ) => {
    try {
        let reliquatId = req.params.id;
        let [reliquat, _] = await Reliquat.findById(reliquatId);

        res.status(200).json( {reliquat: reliquat[0]} );
    } catch (error) {
        next(error);
    }
}



exports.updateReliquat = async (req, res, next) => {
    try {
        let reliquatId = req.params.id;

        if(!reliquatId){
            return res.status(400).json({"message":` Le reliquat ${req.body.id} nexiste pas`});
        }
        if(reliquat.id_com) reliquat.id_com = req.body.id_com;
        if(reliquat.designation) reliquat.designation = req.body.designation;
        if(reliquat.som_paye) reliquat.som_paye = req.body.som_paye;
        if(reliquat.som_due) reliquat.som_due = req.body.som_due;
        if(reliquat.user_id) reliquat.user_id = req.body.user_id

        reliquat = await Reliquat.save();

        res.status(200).json({"message":'reliquat modified'});
    } catch (error) {
        next(error);
    }
}

exports.deleteReliquat = async (req, res, next) => {
    try {
        let reliquatId = req.params.id;
        set [reliquat, _] = await Reliquat.deleteOne([reliquatId, _]);

        res.status(200).json({"message":'reliquat deleted'});
    } catch (error) {
        next(error);
    }
}
  