const db = require('../connexion/db');

class User {
    constructor(nom, prenom, telephone, role, login, password){
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.role = role;
        this.login = login;
        this.password;
    }

    async save() {
        let sql = `
        INSERT INTO users(
            nom,
            prenom,
            telephone,
            role,
            login, 
            pasword
        )
        VALUES(
            '${this.nom}',
            '${this.prenom}',
            '${this.telephone}',
            '${this.role}',
            '${this.login}',
            '${this.password}'
        )
        `;

        return db.execute(sql);
        
        return newUser;
    }

    static findAll() {
        let sql = "SELECT * FROM users;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM users WHERE id = ${id};`;

        return db.execute(sql);
    }

    static deleteOne(id) {
        let sql= `DELETE * FROM users WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = User;
