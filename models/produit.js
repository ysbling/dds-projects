const db = require('../connexion/db');

class Produit {
    constructor(id_pers, libelle, id_user){
        this.id_pers = id_pers;
        this.libelle = libelle;
        this.id_user = id_user
    }

    async save() {
        let sql = `
        INSERT INTO produits(
            id_pers,
            libelle,
            id_user
        )
        VALUES(
            '${this.id_pers}',
            '${this.libelle}',
            '${this.id_user}'
        )
        `;

        return db.execute(sql);
        
        return newProduit;
    }

    static findAll() {
        let sql = "SELECT * FROM produits;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM produits WHERE id = ${id};`;

        return db.execute(sql);
    }

    static deleteOne(id) {
        let sql= `DELETE * FROM produits WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Produit;
