const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/persons', async (req, res) => {
    try {
        const persons = await db.Person.findAll({
            include: [db.Education, db.Experience, db.Project, db.Skill],
        });
        res.json(persons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
