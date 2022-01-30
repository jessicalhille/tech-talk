const { Post } = require('../models');

const postdata = [
    {
        title: 'Internet of Things',
        content: 'The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.',
        user_id: 1
    },
    {
        title: 'Virtual Reality',
        content: 'Virtual reality is an interactive computer-generated experience taking place within a simulated environment. It incorporates mainly auditory and visual feedback, but may also allow other types of sensory feedback like haptic. This immersive environment can be similar to the real world or it can be fantastical.',
        user_id: 2
    },
    {
        title: 'Gesture Recognition',
        content: 'Gesture recognition is a topic in computer science and language technology with the goal of interpreting human gestures via mathematical algorithms.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;