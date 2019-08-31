const express = require('express')

const BRules = require('./data-model')

const router = express.Router()

router.get('/projects', (req, res) => {
    BRules.getProjects()
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting projects: ", err
            })
        })
})

router.get('/tasks', (req, res) => {
    BRules.getTasks()
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting tasks: ", err
            })
        })
})

router.get('/resources', (req, res) => {
    BRules.getResources()
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting resources: ", err
            })
        })
})

// function booleanConverter(project) {
//    if (project.completed == 1) {
//         return "true"
//    } else {
//         return "false"
//    }
// }

module.exports = router