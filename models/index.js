const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { Blog, Comment, User };


