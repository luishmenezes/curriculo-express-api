// api/persons.js
const express = require('express');
const db = require('../models');
const app = express();

app.use(express.json());

app.get('/api/persons', async (req, res) => {
    try {
        const persons = await db.Person.findAll({
            include: [db.Education, db.Experience, db.Project, db.Skill],
        });
        res.json(persons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = app;
module.exports.handler = require('serverless-http')(app);
