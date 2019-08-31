const express = require('express')

const BRules = require('./data-model')

const router = express.Router()

router.get('/projects', (req, res) => {
    BRules.getProjects()
        .then(project => {
            project.forEach(project => {
                if (project.completed == 1) {
                    project.completed = 'true'
                } else {
                    project.completed = 'false'
                }
            })
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
            task.forEach(task => {
                if (task.completed == 1) {
                    task.completed = 'true'
                } else {
                    task.completed = 'false'
                }
            })
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

router.post('/projects', (req, res) => {
    BRules.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding project: ", err
            })
        })
})

router.post('/tasks', (req, res) => {
    BRules.addTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding task: ", err
            })
        })
})

router.post('/resources', (req, res) => {
    BRules.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding resource: ", err
            })
        })
})

module.exports = router