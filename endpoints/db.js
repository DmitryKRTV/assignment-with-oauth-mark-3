const { db } = require('../database/oauth');

async function handler(req, res) {
    res.send({
        oauth: db,
    });
}

module.exports = handler;
