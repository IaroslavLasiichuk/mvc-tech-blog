const deletePost = async (event) => {
    console.log('Works');
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
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
  document.querySelector('.card').addEventListener('click', deletePost);