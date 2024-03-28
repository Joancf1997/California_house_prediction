const { query, test } = require('../../DB/db'); 


const loading = async(_, res) => { 
    //  DB Query
    const { rows } = await query('select * from models where active = true')

    res.status(200).json({
        res: "Welcon to the analytics page",
        models: rows
    });
}

const insert = async(_, res) => { 
    //  DB Query
    const text = 'INSERT INTO models (name, description, active) VALUES($1, $2, $3) RETURNING *'
    const values = ['Test2', 'Linear regression', true]

    const result = await query(text, values)

    res.status(200).json({
        res: "Inserting a new model into the system",
        new_object: result.rows[0]
    });
}


module.exports = { 
    loading,
    insert
}