const db = require('../connexion/db');

class Personne {
    constructor(societe, addresse, telephone, type, id_user){
        this.societe = societe;
        this.addresse = addresse;
        this.telephone = telephone;
        this.type = type;
        this.id_user = id_user
    }

    async save() {
        let sql = `
        INSERT INTO personnes(
            societe,
            addresse,
            telephone,
            type,
            id_user
        )
        VALUES(
            '${this.societe}',
            '${this.addresse}',
            '${this.telephone}',
            '${this.type}',
            '${this.id_user}'
        )
        `;

        return db.execute(sql);
        
        return newPersonne;
    }

    static findAll() {
        let sql = "SELECT * FROM personnes;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM personnes WHERE id = ${id};`;

        return db.execute(sql);
    }

    static deleteOne(id) {
        let sql= `DELETE * FROM personnes WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Personne;
