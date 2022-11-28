const db = require('../connexion/db');

class Reliquat {
    constructor(id_com, designation,som_paye, som_due, id_user){
        this.id_com = id_com;
        this.designation = designation;
        this.som_paye = som_paye;
        this.som_due = som_due;
        this.id_user = id_user;
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let dateheure =`${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO reliquats(
            id_com,
            designation,
            som_paye,
            som_due,
            id_user,
            dateheure
        )
        VALUES(
            '${this.id_com}',
            '${this.designation}',
            '${this.som_paye}',
            '${this.som_due}',            
            '${this.id_user}',            
            '${dateheure}',            
        )
        `;

        return db.execute(sql);
        
        return newligne_commande;
    }

    static findAll() {
        let sql = "SELECT * FROM reliquats;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM reliquats WHERE id = ${id};`;

        return db.execute(sql);
    }

    static deleteOne(id) {
        let sql= `DELETE * FROM reliquats WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Reliquat;
