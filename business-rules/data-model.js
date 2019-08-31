const db = require('../data/db-config')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addTask,
    addResource
}

function getProjects() {
    return db('projects')
}

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 't.id', 'p.id')
        .select('t.task_description', 't.task_notes', 't.completed', 'p.project_name', 'p.project_description')
}

function getResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects').insert(project)
}

function addTask(task) {
    return db('tasks').insert(task)
}

function addResource(resource) {
    return db('resources').insert(resource)
}