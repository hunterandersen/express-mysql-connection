//We need the connection to the database so we can talk to it
import query from "../config/db_connection.js";

const getOne = async (id) => {
    return query(`SELECT * FROM employees WHERE employeeID = ?`, [id]);
}

async function getAll() {
    return query(`SELECT * FROM employees`);
}

export default {
    getOne,
    getAll
}