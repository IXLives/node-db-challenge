exports.seed = function(knex) {
    return knex('projects').insert([
        {project_name: 'World Domination', project_description: 'Take over, the breaks over'},
        {project_name: 'Get Rich Quick', project_description: 'Make money money'},
        {project_name: 'Revenge'}
    ])
}