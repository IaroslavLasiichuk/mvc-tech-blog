const deletePost = async (event) => {
    if (event.target.hasAttribute('data-delete')) {
      const id = event.target.getAttribute('data-delete');
      const response = await fetch(`/edit/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to delete post');
      }
    }
};
const deleteButton = document.querySelector('.btn-delete');
if (deleteButton !== null) {
  deleteButton.addEventListener('click', deletePost);
}  
