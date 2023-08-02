const connection = require('../config/database');

const getAllUsers = async () =>{
    let [results, fields] = await connection.query('select * from Users ');
    return results;
}

const getUserById = async (Id) => {
    let [results, fields] = await connection.query(
        'select * from Users where id = ? ', [Id]
    );
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, name, city, Id) => {
    let [results, fields] = await connection.query(
        `   update Users
            set email = ?, name = ?, city = ?
            where id = ?`, [email, name, city, Id]
    );
}

const deleteUserById = async (Id) => {
    let [results, fields] = await connection.query(
        `   delete from Users where id = ?`, [Id]
    );
}



module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}
