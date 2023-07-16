const connection = require('../config/database');

const getAllUsers = async () =>{
    let [results, fields] = await connection.query('select * from Users ');
    return results;
}

const updateUserById = async (email, name, city, Id) => {
    let [results, fields] = await connection.query(
        `   update Users
            set email = ?, name = ?, city = ?
            where id = ?`, [email, name, city, Id]
    );
}

module.exports = {
    getAllUsers, updateUserById,
}
