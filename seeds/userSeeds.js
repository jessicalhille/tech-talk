const { User } = require('../models');

const userdata = [
    {
        username: 'hellojessica',
        password: 'password1234'
    },
    {
        username: 'hellojake',
        password: 'password4321'
    },
    {
        username: 'hellokyle',
        password: 'password0000'
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;