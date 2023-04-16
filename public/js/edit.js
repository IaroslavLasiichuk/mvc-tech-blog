// Add new comment
const addComment = async (event, blogId) => {
  if (event.target.hasAttribute('data-comment')) {
    const id = event.target.getAttribute('data-comment');
    const comment = document.querySelector(`#comment-${id}`).value;
    const response = await fetch(`/edit/${id}`, {
      method: 'POST',
      body: JSON.stringify({ blog_id: blogId, comment }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to comment post');
    }
  }
};

document.querySelectorAll('.btn-comment').forEach(button => {
  const blogId = button.getAttribute('data-comment');
  button.addEventListener('click', event => addComment(event, blogId));
});


// const deletePost = async (event) => {
//   if (event.target.hasAttribute('data-delete')) {
//     const id = event.target.getAttribute('data-delete');
//     const response = await fetch(`/edit/${id}`, {
//       method: 'DELETE',
//     });
//     if (response.ok) {
//       document.location.replace('/home');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// const deleteButton = document.querySelector('.btn-delete');
// if (deleteButton !== null) {
// deleteButton.addEventListener('click', deletePost);
// } 

// Delete post
// const deletePost = async (event) => {
//   if (event.target.hasAttribute('data-delete')) {
//     const id = event.target.getAttribute('data-delete');
//     const response = await fetch(`/edit/${id}`, {
//       method: 'DELETE',
//     });
//     if (response.ok) {
//       document.location.replace('/home');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// const deleteButton = document.querySelector('.btn-delete');
// if (deleteButton !== null) {
// deleteButton.addEventListener('click', deletePost);
// }  

// document.querySelector('.btn-edit').addEventListener('click', editPost);