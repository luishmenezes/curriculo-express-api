const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /api/persons
router.get('/persons', async (req, res) => {
    const persons = await db.Person.findAll({
        include: [db.Education, db.Experience, db.Project, db.Skill]
    });
    res.json(persons);
});

module.exports = router;
