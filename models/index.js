const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

// User.hasMany(Blog, Comment, {
//     foreignKey: 'id',
//     onDelete: 'CASCADE'
// });

module.exports = { Blog, Comment, User };

