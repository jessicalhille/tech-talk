const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Wow, this is really interesting!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'I love VR. I use it at home and at work!',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'This is going to be huge as we continue into a robotics age.',
        user_id: 1,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;