const db = require('../connexion/db');

class Ligne_commande {
    constructor(id_com, id_produit,quantite, prix_unitaire){
        this.id_com = id_com;
        this.id_produit = id_produit;
        this.quantite = quantite;
        this.prix_unitaire = prix_unitaire
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let dateheure =`${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO ligne_commandes(
            id_com,
            id_produit,
            quantite,
            prix_unitaire,
            dateheure
        )
        VALUES(
            '${this.id_com}',
            '${this.id_produit}',
            '${this.quantite}',
            '${this.prix_unitaire}',            
            '${dateheure}',            
        )
        `;

        return db.execute(sql);
        
        return newligne_commande;
    }

    static findAll() {
        let sql = "SELECT * FROM ligne_commandes;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM ligne_commandes WHERE id = ${id};`;

        return db.execute(sql);
    }

    static deleteOne(id) {
        let sql= `DELETE * FROM ligne_commandes WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Ligne_commande;
