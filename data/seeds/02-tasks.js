exports.seed = function(knex) {
    return knex('tasks').insert([
        {task_description: 'Get Elected', project_id: 1},
        {task_description: '???', project_id: 2},
        {task_description: 'Stalk', project_id: 3},
        {task_description: 'Dictate', project_id: 1}
    ])
}