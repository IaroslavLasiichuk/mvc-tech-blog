const Blog = require('./Blog');
const Comment = require('./Comment');
<<<<<<< HEAD
module.exports = { Blog, Comment };
=======
const User = require('./User');

// User.hasMany(Blog, Comment, {
//     foreignKey: 'id',
//     onDelete: 'CASCADE'
// });

module.exports = { Blog, Comment, User };

>>>>>>> 87a89501e8a5d0be23edd295e335539cf7c458bd
