exports.seed = function(knex) {
    return knex('resources').insert([
        {resource_name: 'The internet'},
        {resource_name: 'Twitter'},
        {resource_name: 'Money'},
        {resource_name: 'Inheritance'},
        {resource_name: 'Weaponz'},
        {resource_name: 'Warez'},
    ])
}