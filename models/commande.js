const db = require('../connexion/db');

class Commande {
    constructor(id_pers, description, id_user){
        this.id_pers = id_pers;
        this.description = description;
        this.id_user = id_user
    }

    async save() {
        let sql = `
        INSERT INTO commandes(
            id_pers,
            description,
            id_user
        )
        VALUES(
            '${this.id_pers}',
            '${this.description}',
            '${this.id_user}'
        )
        `;

        return db.execute(sql);
        
        return newCommande;
    }

    static findAll() {
        let sql = "SELECT * FROM commandes;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM commandes WHERE id = ${id};`;

        return db.execute(sql);
    }

    static deleteOne(id) {
        let sql= `DELETE * FROM commandes WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Commande;
